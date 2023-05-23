import type { Meta, StoryObj } from "@storybook/react";
import { PageTitle } from "./PageTitle";

const meta: Meta<typeof PageTitle> = {
  title: "PageTitle",
  component: PageTitle,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof PageTitle>;


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
