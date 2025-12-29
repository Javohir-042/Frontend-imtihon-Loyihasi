import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width ?? 19}
    height={props.height ?? 19}
    fill="none"
    viewBox="0 0 19 19"
    {...props}
  >
    <path stroke="#000" d="m.354.354 9 9m9 9-9-9m0 0-9 9 18-18" />
  </svg>
);
export default SvgComponent;
