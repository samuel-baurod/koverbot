import React from "react";
import { BrowserRouter } from "react-router-dom";

import Chatbot from './chatbot/Chatbot';

const App = () => (
    <div>
        <BrowserRouter>
           <div>
               <Chatbot />
           </div>
           </BrowserRouter>
    </div>
)

export default App;