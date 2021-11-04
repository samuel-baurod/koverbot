if (process.env.NODE_ENVM === 'production') {
    module.exports = require('./prod');
} else {
    module.exports = require('./dev');
}