import * as React from "react";
const SVGComponent = (props) => (
  <svg
    width="35px"
    height="35px"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      d="M4 17H8M12 17H20M4 12H20M4 7H12M16 7H20"
      stroke="#ff0000"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SVGComponent;
