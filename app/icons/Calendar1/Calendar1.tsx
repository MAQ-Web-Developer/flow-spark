/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const Calendar1 = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="24"
      viewBox="0 0 25 24"
      width="25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.5 7V3M16.5 7V3M7.5 11H17.5M5.5 21H19.5C20.6046 21 21.5 20.1046 21.5 19V7C21.5 5.89543 20.6046 5 19.5 5H5.5C4.39543 5 3.5 5.89543 3.5 7V19C3.5 20.1046 4.39543 21 5.5 21Z"
        stroke="#CBCED4"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};
