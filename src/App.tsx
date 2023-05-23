import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {PageTitle} from "./components/PageTitle/PageTitle";
import {Rating, ValueStarType} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";

function App() {

    const [countStarSelected, setCountStarSelected] = useState<ValueStarType>(0)
    const [collapsed, useCollapsed] = useState<boolean>(false)
    const [onOff, setOnOFF] = useState<boolean>(false)

    return (
        <div className="App">
            <PageTitle title={"Hello, everybody!"}/>
            <Rating countStarSelected={countStarSelected} setCountStarSelected={setCountStarSelected}/>
            <PageTitle title={"My page"}/>
            <PageTitle title={"My friends"}/>
            <Accordion title={"Menu"} collapsed={collapsed} useCollapsed={useCollapsed}
                       items={[{title: "Aleksey", value: 1}, {title: "Artur", value: 2}, {title: "Andrew", value: 3}]}
                       callBack={x => x}/>
            <OnOff onOff={onOff} setOnOFF={setOnOFF}/>
        </div>
    );
}

export default App;
