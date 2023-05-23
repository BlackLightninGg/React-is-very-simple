import type { Meta, StoryObj } from '@storybook/react';
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

type Story = StoryObj<typeof Accordion>;

export const CollapsedAccordion: Story = {
  args: {
   title:"Collapsed Accordion",
     collapsed:true,
      useCollapsed:callBack,
  },
};

export const UncollapsedAccordion: Story = {
  args: {
   title:"Uncollapsed Accordion",
     collapsed:false,
      useCollapsed:callBack,
  },
};

const SetSwitchAccordion = () => {
  const [value, setValue] = useState<boolean>(true)
  return <Accordion title="Switch Accordion" collapsed={value} useCollapsed={setValue} />;
};

export const SwitchAccordion: Story = {
  render: () => <SetSwitchAccordion />,
};