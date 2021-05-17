import React from 'react';
import './assets/styles/pentacle.scss';
import {BrowserRouter} from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";
import {Router} from "./Router";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Router/>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
