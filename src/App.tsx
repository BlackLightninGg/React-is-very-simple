import React, {useReducer, useState} from 'react';
import './App.css';
import {AccordionMemo} from "./components/Accordion/Accordion";
import {PageTitleMemo} from "./components/PageTitle/PageTitle";
import {RatingMemo, ValueStarType} from "./components/Rating/Rating";
import {OnOffMemo} from "./components/OnOff/OnOff";
import {AccordionReducer} from "./components/Accordion/AccordionReducer";

function App() {

    const [countStarSelected, setCountStarSelected] = useState<ValueStarType>(0)
    const [collapsed, dispatchCollapsed] = useReducer(AccordionReducer,false)
    const [onOff, setOnOFF] = useState<boolean>(false)

    return (
        <div className="App">
            <PageTitleMemo title={"Hello, everybody!"}/>
            <RatingMemo countStarSelected={countStarSelected} setCountStarSelected={setCountStarSelected}/>
            <PageTitleMemo title={"My page"}/>
            <PageTitleMemo title={"My friends"}/>
            <AccordionMemo title={"Menu"} collapsed={collapsed} dispatchCollapsed={dispatchCollapsed}
                       items={[{title: "Aleksey", value: 1}, {title: "Artur", value: 2}, {title: "Andrew", value: 3}]}
                       callBack={x => x}/>
            <OnOffMemo onOff={onOff} setOnOFF={setOnOFF}/>
        </div>
    );
}

export default App;
