import { TextInputField } from ".";

export default {
  title: "Components/TextInputField",
  component: TextInputField,
  argTypes: {
    type: {
      options: ["disabled", "empty", "placeholder", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    showInputLabel: true,
    leadingIcon: true,
    inputText: "Input text",
    inputLabel: "Label",
    trailingIcon: true,
    type: "disabled",
    className: {},
    textInputClassName: {},
  },
};
