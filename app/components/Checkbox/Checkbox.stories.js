import { Checkbox } from ".";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    state: {
      options: ["off", "on"],
      control: { type: "select" },
    },
    style: {
      options: ["disabled", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    state: "off",
    style: "disabled",
    stateOffStyleClassName: {},
  },
};
