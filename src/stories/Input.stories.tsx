import type { Meta, StoryObj } from '@storybook/react';
import {useState} from "react";

const meta: Meta<typeof HTMLInputElement> = {
    title: "Input",
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof HTMLInputElement>;

const CreateInput = () => {
  const [value, setValue] = useState<string>("true")
  return <input value={value} onChange={(e)=>{setValue(e.currentTarget.value)}} />
};

export const Input: Story = {
  render: () => <CreateInput />,
};

const CreateCheckBox = () => {
  const [value, setValue] = useState<boolean>(true)
  return <input type={"Checkbox"} checked={value} onChange={()=>setValue(!value)} />
};

export const Checkbox: Story = {
  render: () => <CreateCheckBox />,
};