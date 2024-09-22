import { IconButtons } from ".";

export default {
  title: "Components/IconButtons",
  component: IconButtons,
  argTypes: {
    type: {
      options: ["primary", "secondary", "outline"],
      control: { type: "select" },
    },
    state: {
      options: ["disabled", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "primary",
    state: "disabled",
    className: {},
  },
};
