import type { Meta, StoryObj } from "@storybook/react";
import { OnOffMemo } from "./OnOff";
import { action } from "@storybook/addon-actions";
import { useState } from "react";

const meta: Meta<typeof OnOffMemo> = {
  title: "OnOff",
  component: OnOffMemo,
  tags: ['autodocs'],
};

export default meta;
const callBack = action("Accordion has been clicked");

type Story = StoryObj<typeof OnOffMemo>;

export const On: Story = {
  args: {
    onOff: true,
    setOnOFF: callBack,
  },
};

export const Off: Story = {
  args: {
    onOff: false,
    setOnOFF: callBack,
  },
};

const SetSwitchOnOff = () => {
  const [value, setValue] = useState<boolean>(true);
  
  return <OnOffMemo onOff={value} setOnOFF={setValue} />;
};

export const SwitchOnOff: Story = {
  render: () => <SetSwitchOnOff />,
};
