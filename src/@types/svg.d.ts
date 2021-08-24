declare module "*.svg" {
  import React from "react";
  import { SvgProps } from "react-svg-props";
  const content: React.FC<SvgProps>;
  export default content;
}
