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

export const ChevronRight = ({ color = "#545F71", className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 17 16"
      width="17"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.5 3.33334L11.1667 8L6.5 12.6667"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

ChevronRight.propTypes = {
  color: PropTypes.string,
};
