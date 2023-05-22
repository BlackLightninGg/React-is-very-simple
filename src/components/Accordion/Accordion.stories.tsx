import React, {useState} from "react";
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";

export default {
    title: "Accordion",
    component: Accordion,
};

const callBack = action("Accordion has been clicked")


export const CollapsedAccordion = () => <Accordion title={"Collapsed Accordion"} collapsed={true} useCollapsed={callBack}/>;
export const UncollapsedAccordion = () => <Accordion title={"Uncollapsed Accordion"} collapsed={false} useCollapsed={callBack}/>;
export const SwitchAccordion = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion title={"Switch Accordion"} collapsed={value} useCollapsed={setValue}/>;
}