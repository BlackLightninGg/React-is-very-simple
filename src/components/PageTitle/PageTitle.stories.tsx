import type { Meta, StoryObj } from "@storybook/react";
import { PageTitleMemo } from "./PageTitle";

const meta: Meta<typeof PageTitleMemo> = {
  title: "PageTitle",
  component: PageTitleMemo,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof PageTitleMemo>;


export const PageTitle1: Story = {
  args: {
    title: "Hi",
  },
};

export const PageTitle2: Story = {
  args: {
    title: "Hello!",
  },
};
