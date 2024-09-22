/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { PlusCircle1 } from "../../icons/PlusCircle1";

interface Props {
  label: string;
  trailingIcon: boolean;
  leadingIcon: boolean;
  size: "regular";
  type: "primary" | "secondary" | "outline";
  state: "disabled" | "default";
  className: any;
  divClassName: any;
}

export const Button = ({
  label = "Button label",
  trailingIcon = true,
  leadingIcon = true,
  size,
  type,
  state,
  className,
  divClassName,
}: Props): JSX.Element => {
  return (
    <div
      className={`inline-flex items-center gap-4 h-12 overflow-hidden rounded-[100px] justify-center relative ${
        type === "outline" ? "border-2 border-solid" : ""
      } ${
        state === "default" && type === "outline"
          ? "border-primary-400"
          : type === "outline" && state === "disabled"
          ? "border-neutral-400"
          : ""
      } ${state === "default" && type === "secondary" ? "px-[31px] py-4" : "px-8 py-4"} ${
        state === "default" && type === "primary"
          ? "bg-primary-400"
          : type === "primary" && state === "disabled"
          ? "bg-neutral-400"
          : state === "default" && type === "secondary"
          ? "bg-primary-200"
          : type === "secondary" && state === "disabled"
          ? "bg-neutral-200"
          : ""
      } ${className}`}
    >
      {leadingIcon && (
        <PlusCircle1
          className="!relative !w-6 !h-6 !mt-[-4.00px] !mb-[-4.00px]"
          color={
            state === "default" && type === "primary"
              ? "white"
              : type === "primary" && state === "disabled"
              ? "#F5F5F7"
              : state === "disabled" && ["outline", "secondary"].includes(type)
              ? "#CBCED4"
              : "#16504B"
          }
        />
      )}

      <div
        className={`font-body-normal-heavy w-fit tracking-[var(--body-normal-heavy-letter-spacing)] [font-style:var(--body-normal-heavy-font-style)] text-[length:var(--body-normal-heavy-font-size)] font-[number:var(--body-normal-heavy-font-weight)] leading-[var(--body-normal-heavy-line-height)] whitespace-nowrap relative ${
          state === "default" && type === "primary"
            ? "text-white"
            : type === "primary" && state === "disabled"
            ? "text-neutral-200"
            : state === "disabled" && ["outline", "secondary"].includes(type)
            ? "text-neutral-400"
            : "text-primary-600"
        } ${divClassName}`}
      >
        {label}
      </div>
      {trailingIcon && (
        <PlusCircle1
          className="!relative !w-6 !h-6 !mt-[-4.00px] !mb-[-4.00px]"
          color={
            state === "default" && type === "primary"
              ? "white"
              : type === "primary" && state === "disabled"
              ? "#F5F5F7"
              : state === "disabled" && ["outline", "secondary"].includes(type)
              ? "#CBCED4"
              : "#16504B"
          }
        />
      )}
    </div>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  trailingIcon: PropTypes.bool,
  leadingIcon: PropTypes.bool,
  size: PropTypes.oneOf(["regular"]),
  type: PropTypes.oneOf(["primary", "secondary", "outline"]),
  state: PropTypes.oneOf(["disabled", "default"]),
};
