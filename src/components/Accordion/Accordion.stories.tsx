import type {Meta, StoryObj} from '@storybook/react';
import {AccordionMemo} from "./Accordion";
import {action} from "@storybook/addon-actions";
import {useReducer} from "react";
import {AccordionReducer} from "./AccordionReducer";

const meta: Meta<typeof AccordionMemo> = {
    title: "Accordion",
    component: AccordionMemo,
    tags: ['autodocs'],
};

export default meta;
const callBack = action("Accordion has been clicked")
const callBackItems = action("Item has been clicked")

type Story = StoryObj<typeof AccordionMemo>;

export const CollapsedAccordion: Story = {
    args: {
        title: "Collapsed Accordion",
        collapsed: true,
        dispatchCollapsed: callBack,
        items: [{title: "Aleksey", value: 1}, {title: "Artur", value: 2}, {title: "Andrew", value: 3}],
        callBack: callBackItems
    },
};

export const UncollapsedAccordion: Story = {
    args: {
        title: "Uncollapsed Accordion",
        collapsed: false,
        dispatchCollapsed: callBack,
        items: [{title: "Aleksey", value: 1}, {title: "Artur", value: 2}, {title: "Andrew", value: 3}],
        callBack: callBackItems
    },
};

const SetSwitchAccordion = () => {
    const [collapsed, dispatchCollapsed] = useReducer(AccordionReducer, false)
    return <AccordionMemo title="Switch Accordion" collapsed={collapsed} dispatchCollapsed={dispatchCollapsed}
                      items={[{title: "Aleksey", value: 1}, {title: "Artur", value: 2}, {title: "Andrew", value: 3}]}
                      callBack={callBackItems}/>;
};

export const SwitchAccordion: Story = {
    render: () => <SetSwitchAccordion/>,
};