/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Eye7 } from "../../icons/Eye7";

interface Props {
  showInputLabel: boolean;
  leadingIcon: boolean;
  inputText: string;
  inputLabel: string;
  trailingIcon: boolean;
  type: "disabled" | "empty" | "placeholder" | "default";
  className: any;
  textInputClassName: any;
}

export const TextInputField = ({
  showInputLabel = true,
  leadingIcon = true,
  inputText = "Input text",
  inputLabel = "Label",
  trailingIcon = true,
  type,
  className,
  textInputClassName,
}: Props): JSX.Element => {
  return (
    <div className={`w-[345px] flex flex-col items-start gap-[7px] justify-end relative ${className}`}>
      {showInputLabel && (
        <div className="font-body-normal w-fit mt-[-1.00px] tracking-[var(--body-normal-letter-spacing)] text-[length:var(--body-normal-font-size)] [font-style:var(--body-normal-font-style)] text-neutral-600 font-[number:var(--body-normal-font-weight)] leading-[var(--body-normal-line-height)] whitespace-nowrap relative">
          {inputLabel}
        </div>
      )}

      <div
        className={`border border-solid w-full self-stretch h-12 rounded-md relative ${
          type === "disabled" ? "border-neutral-400" : "border-neutral-600"
        } ${["default", "disabled", "placeholder"].includes(type) ? "flex" : ""} ${
          ["default", "disabled", "placeholder"].includes(type) ? "items-center" : ""
        } ${["default", "disabled", "placeholder"].includes(type) ? "gap-3" : ""} ${
          ["default", "disabled", "placeholder"].includes(type) ? "p-3" : ""
        } ${type === "disabled" ? "bg-neutral-200" : "bg-[#ffffff]"} ${textInputClassName}`}
      >
        {leadingIcon && (
          <Eye7
            className={type === "empty" ? "!left-3 !absolute !w-6 !h-6 !top-3" : "!relative !w-6 !h-6"}
            color={type === "disabled" ? "#CBCED4" : "#4D5973"}
          />
        )}

        {["default", "disabled", "placeholder"].includes(type) && (
          <div
            className={`font-body-normal tracking-[var(--body-normal-letter-spacing)] [font-style:var(--body-normal-font-style)] text-[length:var(--body-normal-font-size)] flex-1 relative font-[number:var(--body-normal-font-weight)] leading-[var(--body-normal-line-height)] ${
              type === "default" ? "text-neutral-600" : "text-neutral-400"
            }`}
          >
            {inputText}
          </div>
        )}

        {trailingIcon && (
          <Eye7
            className={type === "empty" ? "!left-[309px] !absolute !w-6 !h-6 !top-3" : "!relative !w-6 !h-6"}
            color={type === "disabled" ? "#CBCED4" : "#4D5973"}
          />
        )}
      </div>
    </div>
  );
};

TextInputField.propTypes = {
  showInputLabel: PropTypes.bool,
  leadingIcon: PropTypes.bool,
  inputText: PropTypes.string,
  inputLabel: PropTypes.string,
  trailingIcon: PropTypes.bool,
  type: PropTypes.oneOf(["disabled", "empty", "placeholder", "default"]),
};
