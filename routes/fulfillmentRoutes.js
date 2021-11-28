const { WebhookClient } = require('dialogflow-fulfillment');

const mongoose = require('mongoose');
const Demand = mongoose.model('demand');
const Coupon = mongoose.model('coupon');
const Registration = mongoose.model('registration');

module.exports = app => {
    app.post('/', async (req, res) => {
        const agent = new WebhookClient({ request: req, response: res });

        function snoopy(agent) {
            agent.add('Bienvenido a mi Snoopy fulfillment!');
        }

        async function registration(agent) {

            const registration = new Registration({
                name: agent.parameters.name,
                address: agent.parameters.address,
                phone: agent.parameters.phone,
                email: agent.parameters.email,
                dateSent: Date.now()
            });
            try{
                let reg = await registration.save();
                console.log(reg);
            } catch (err){
                console.log(err);
            }
        }

        async function aprender(agent) {
            Demand.findOne({'course': agent.parameters.curso}, function(err, course) {
                if (course !== null ) {
                    course.counter++;
                    course.save();
                } else {
                    const demand = new Demand({course: agent.parameters.curso});
                    demand.save();
                }
            });
            let responseText = `Quieres aprender sobre ${agent.parameters.curso}. 
                Aquí hay un enlace a todos mis cursos: https://www.udemy.com/user/jana-bergant`;

            let coupon = await Coupon.findOne({'course': agent.parameters.curso});
            if (coupon !== null ) {
                responseText = `Quieres aprender sobre ${agent.parameters.curso}. 
                    Aquí hay un enlace al curso: ${coupon.link}`;
                }
    
            agent.add(responseText);
        }

        function fallback(agent) {
            agent.add('Ups, no he entendido a que te refieres.');
            agent.add('¿Podrías repetirlo, por favor?');
        }
        let intentMap = new Map();
        intentMap.set('snoopy',snoopy);
        intentMap.set('aprender cursos',aprender);
        intentMap.set('informes productos - si', registration);
        intentMap.set('Default Fallback Intent',fallback);

        agent.handleRequest(intentMap);
    });

} 