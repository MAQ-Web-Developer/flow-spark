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

export const StateOnStyleDefault = ({ color = "#32BAAE", className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_15_675)">
        <rect fill={color} height="20" rx="3" width="20" x="2" y="2" />
        <path
          d="M10.5001 14.379L17.3941 7.48425L18.4553 8.54475L10.5001 16.5L5.72705 11.727L6.78755 10.6665L10.5001 14.379Z"
          fill="#F5F5F7"
        />
      </g>
      <defs>
        <clipPath id="clip0_15_675">
          <rect fill="white" height="20" rx="3" width="20" x="2" y="2" />
        </clipPath>
      </defs>
    </svg>
  );
};

StateOnStyleDefault.propTypes = {
  color: PropTypes.string,
};
