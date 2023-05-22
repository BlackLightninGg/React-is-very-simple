import React, {useState} from "react";
import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: "OnOff",
    component: OnOff,
};

const callBack = action("on or off has been clicked")


export const On = () => <OnOff onOff={true} setOnOFF={callBack}/>;
export const Off = () => <OnOff onOff={false} setOnOFF={callBack}/>;
export const SwitchOnOff = () => {
    const [onOff, setOnOff] = useState<boolean>(true)
    return <OnOff onOff={onOff} setOnOFF={setOnOff}/>;
}