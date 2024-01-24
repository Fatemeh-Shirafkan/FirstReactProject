import * as React from "react";
const SVGComponent = (props) => (
  <svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="80px"
    height="80px"
    viewBox="0 0 32 32"
    enableBackground="new 0 0 32 32"
    xmlSpace="preserve"
    {...props}
  >
    <g>
      <path
        fill="#828282"
        d="M16,32c8.822,0,16-7.178,16-16S24.822,0,16,0S0,7.178,0,16S7.178,32,16,32z M16,1c8.271,0,15,6.729,15,15 s-6.729,15-15,15S1,24.271,1,16S7.729,1,16,1z"
      />
      <path
        fill="#828282"
        d="M20.061,21.768c0.098,0.098,0.226,0.146,0.354,0.146s0.256-0.049,0.354-0.146 c0.195-0.195,0.195-0.512,0-0.707L16,16.293V9.319c0-0.276-0.224-0.5-0.5-0.5S15,9.043,15,9.319V16.5 c0,0.133,0.053,0.26,0.146,0.354L20.061,21.768z"
      />
      <circle fill="#828282" cx={4} cy={16} r={1} />
      <circle fill="#828282" cx={28} cy={16} r={1} />
      <circle fill="#828282" cx={16} cy={4} r={1} />
      <circle fill="#828282" cx={16} cy={28} r={1} />
      <circle fill="#828282" cx={8} cy={8} r={1} />
      <circle fill="#828282" cx={24} cy={24} r={1} />
      <circle fill="#828282" cx={25} cy={8} r={1} />
      <circle fill="#828282" cx={8} cy={24} r={1} />
    </g>
  </svg>
);
export default SVGComponent;
