import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SVGComponent = (props: SvgProps) => (
  <Svg
    width={21}
    height={18}
    viewBox="0 0 21 18"
    fill="none"
    // @ts-ignore
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M11.5642 1L0.999999 8.99685M0.999999 8.99685L11.5642 17M0.999999 8.99685L20 8.99686"
      stroke="#F1FFF3"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SVGComponent;
