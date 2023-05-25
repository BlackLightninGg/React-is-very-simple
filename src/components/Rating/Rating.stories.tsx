import type { Meta, StoryObj } from "@storybook/react";
import { Rating, ValueStarType } from "./Rating";
import { action } from "@storybook/addon-actions";
import { useState } from "react";

const meta: Meta<typeof Rating> = {
  title: "Rating",
  component: Rating,
  tags: ['autodocs'],
};

export default meta;
const callBack = action("Accordion has been clicked");

type Story = StoryObj<typeof Rating>;

export const EmptyStars: Story = {
  args: {
    countStarSelected: 0,
    setCountStarSelected: callBack,
  },
};

export const Rating1: Story = {
  args: {
    countStarSelected: 1,
    setCountStarSelected: callBack,
  },
};

export const Rating2: Story = {
  args: {
    countStarSelected: 2,
    setCountStarSelected: callBack,
  },
};

export const Rating3: Story = {
  args: {
    countStarSelected: 3,
    setCountStarSelected: callBack,
  },
};

export const Rating4: Story = {
  args: {
    countStarSelected: 4,
    setCountStarSelected: callBack,
  },
};

export const Rating5: Story = {
  args: {
    countStarSelected: 5,
    setCountStarSelected: callBack,
  },
};

export const ChangeRating = () => {
  const [value, setValue] = useState<ValueStarType>(3);
  return <Rating countStarSelected={value} setCountStarSelected={setValue} />;
};


