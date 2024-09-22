import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    size: {
      options: ["regular"],
      control: { type: "select" },
    },
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
    label: "Button label",
    trailingIcon: true,
    leadingIcon: true,
    size: "regular",
    type: "primary",
    state: "disabled",
    className: {},
    divClassName: {},
  },
};
