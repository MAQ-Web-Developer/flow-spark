/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  color: string;
  className: any;
}

export const ArrowLeft = ({ color = "#545F71", className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="21"
      viewBox="0 0 20 21"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.33333 16.1341L2.5 10.3007M2.5 10.3007L8.33333 4.46741M2.5 10.3007L17.5 10.3007"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

ArrowLeft.propTypes = {
  color: PropTypes.string,
};
