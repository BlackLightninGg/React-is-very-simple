import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {PageTitle} from "./components/PageTitle/PageTitle";
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";

function App() {
    return (
        <div className="App">
            <PageTitle title={"Hello, everybody!"}/>
            <Rating/>
            <Rating/>
            <PageTitle title={"My page"}/>
            <PageTitle title={"My friends"}/>
            <Accordion title={"Menu"}/>
            <Accordion title={"Users"}/>
            <OnOff/>
            <OnOff/>
        </div>
    );
}

export default App;
