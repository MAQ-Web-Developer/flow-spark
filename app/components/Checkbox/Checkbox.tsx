/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { StateOnStyleDefault } from "../../icons/StateOnStyleDefault";

interface Props {
  state: "off" | "on";
  style: "disabled" | "default";
  stateOffStyleClassName: any;
}

export const Checkbox = ({ state, style, stateOffStyleClassName }: Props): JSX.Element => {
  return (
    <>
      {state === "off" && (
        <div className={`w-6 h-6 ${stateOffStyleClassName}`}>
          <div
            className={`border-2 border-solid w-5 left-0.5 top-0.5 h-5 rounded-[3px] bg-neutral-200 relative ${
              style === "disabled" ? "border-neutral-400" : "border-primary-400"
            }`}
          />
        </div>
      )}

      {state === "on" && (
        <StateOnStyleDefault
          className="!absolute !w-6 !h-6 !top-0 !left-0"
          color={style === "disabled" ? "#CBCED4" : "#32BAAE"}
        />
      )}
    </>
  );
};

Checkbox.propTypes = {
  state: PropTypes.oneOf(["off", "on"]),
  style: PropTypes.oneOf(["disabled", "default"]),
};
