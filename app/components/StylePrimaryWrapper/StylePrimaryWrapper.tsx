/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  style: "primary" | "outline";
  className: any;
  text: string;
}

export const StylePrimaryWrapper = ({ style, className, text = "Demo" }: Props): JSX.Element => {
  return (
    <button
      className={`all-[unset] box-border inline-flex items-center gap-2.5 px-8 py-4 rounded-[100px] justify-center relative ${
        style === "outline" ? "border-2 border-solid" : ""
      } ${style === "outline" ? "border-primary-400" : ""} ${style === "primary" ? "bg-primary-400" : ""} ${className}`}
    >
      <div
        className={`[font-family:'Quicksand',Helvetica] w-fit tracking-[0] text-base font-semibold leading-[11px] whitespace-nowrap relative ${
          style === "outline" ? "mt-[-2.00px]" : "mt-[-1.00px]"
        } ${style === "outline" ? "text-primary-400" : "text-neutral-200"}`}
      >
        {text}
      </div>
    </button>
  );
};

StylePrimaryWrapper.propTypes = {
  style: PropTypes.oneOf(["primary", "outline"]),
  text: PropTypes.string,
};
