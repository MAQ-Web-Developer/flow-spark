/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { PlusCircle1 } from "../../icons/PlusCircle1";

interface Props {
  type: "primary" | "secondary" | "outline";
  state: "disabled" | "default";
  className: any;
  icon: JSX.Element;
}

export const IconButtons = ({
  type,
  state,
  className,
  icon = <PlusCircle1 className="!relative !w-6 !h-6" color="#F5F5F7" />,
}: Props): JSX.Element => {
  return (
    <div
      className={`inline-flex items-center gap-2.5 p-3 overflow-hidden rounded-md justify-center relative ${
        type === "outline" ? "border-2 border-solid" : ""
      } ${
        state === "default" && type === "outline"
          ? "border-primary-400"
          : type === "outline" && state === "disabled"
          ? "border-neutral-400"
          : ""
      } ${
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
      {icon}
    </div>
  );
};

IconButtons.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary", "outline"]),
  state: PropTypes.oneOf(["disabled", "default"]),
};
