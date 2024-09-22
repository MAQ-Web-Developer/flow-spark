import { StylePrimaryWrapper } from ".";

export default {
  title: "Components/StylePrimaryWrapper",
  component: StylePrimaryWrapper,
  argTypes: {
    style: {
      options: ["primary", "outline"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    style: "primary",
    className: {},
    text: "Demo",
  },
};
