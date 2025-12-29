import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width ?? 30}
    height={props.height ?? 16}
    fill="none"
    viewBox="0 0 30 16"
    {...props}
  >
    <path stroke="#454545" strokeWidth={2} d="M0 1h30M4.5 8H30m-20 7h20" />
  </svg>
);
export default SvgComponent;
