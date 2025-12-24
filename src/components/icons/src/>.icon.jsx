import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width ?? 6}
    height={props.height ?? 9}
    fill="none"
    viewBox="0 0 6 9"
    {...props}
  >
    <path stroke="#000" d="m.355.354 4 4-4 4" />
  </svg>
);
export default SvgComponent;
