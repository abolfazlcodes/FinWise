import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SVGComponent = (props: SvgProps) => (
  <Svg
    width={33}
    height={33}
    viewBox="0 0 33 33"
    fill="none"
    // @ts-ignore
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M25.7654 25.4665L32 31.5M7.45112 9.79609V21.2765M11.4073 21.2765V15.9605M19.5415 21.2765V18.6212M15.3635 21.2765V9.79609M23.5627 21.2765V14.1851M30.0084 15.5363C30.0084 23.2884 23.5146 29.5726 15.5042 29.5726C7.49375 29.5726 1 23.2884 1 15.5363C1 7.78427 7.49375 1.5 15.5042 1.5C23.5146 1.5 30.0084 7.78427 30.0084 15.5363Z"
      stroke="#052224"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SVGComponent;
