import type {Meta, StoryObj} from '@storybook/react';
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";
import {useState} from "react";

const meta: Meta<typeof Accordion> = {
    title: "Accordion",
    component: Accordion,
    tags: ['autodocs'],
};

export default meta;
const callBack = action("Accordion has been clicked")
const callBackItems = action("Item has been clicked")

type Story = StoryObj<typeof Accordion>;

export const CollapsedAccordion: Story = {
    args: {
        title: "Collapsed Accordion",
        collapsed: true,
        useCollapsed: callBack,
        items: [{title: "Aleksey", value: 1}, {title: "Artur", value: 2}, {title: "Andrew", value: 3}],
        callBack: callBackItems
    },
};

export const UncollapsedAccordion: Story = {
    args: {
        title: "Uncollapsed Accordion",
        collapsed: false,
        useCollapsed: callBack,
        items: [{title: "Aleksey", value: 1}, {title: "Artur", value: 2}, {title: "Andrew", value: 3}],
        callBack: callBackItems
    },
};

const SetSwitchAccordion = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion title="Switch Accordion" collapsed={value} useCollapsed={setValue}
                      items={[{title: "Aleksey", value: 1}, {title: "Artur", value: 2}, {title: "Andrew", value: 3}]}
                      callBack={callBackItems}/>;
};

export const SwitchAccordion: Story = {
    render: () => <SetSwitchAccordion/>,
};