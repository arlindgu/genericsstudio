import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    {...props}
  >
    <title>{"Framer icon"}</title>
    <path d="M4 0h16v8h-8zm0 8h8l8 8H4zm0 8h8v8z" fill="currentColor" />
  </svg>
);
export { SvgComponent as FramerLogo };
