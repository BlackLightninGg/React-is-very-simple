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
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <PageTitle title={"My page"}/>
            <PageTitle title={"My friends"}/>
            <Accordion title={"Menu"} collapsed={true}/>
            <Accordion title={"Users"} collapsed={false}/>
            <OnOff/>
            <OnOff/>
        </div>
    );
}

export default App;
