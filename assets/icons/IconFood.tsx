import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SVGComponent = (props: SvgProps) => (
  <Svg
    width={23}
    height={38}
    viewBox="0 0 23 38"
    fill="none"
    // @ts-ignore
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M3.22189 3.19409L2 14.3021C2.00365 15.187 2.26933 16.0509 2.76358 16.7848C3.25782 17.5188 3.95847 18.0899 4.77701 18.426L3.92987 33.5052C3.91305 34.162 4.15708 34.7989 4.60853 35.2763C5.05998 35.7538 5.68227 36.0331 6.33907 36.053C6.99588 36.0331 7.618 35.7538 8.06945 35.2763C8.5209 34.7989 8.76493 34.162 8.74811 33.5052L8.17182 18.426C8.9909 18.0907 9.69208 17.5198 10.1864 16.7857C10.6808 16.0515 10.9461 15.1872 10.9488 14.3021L9.9561 3.19409M6.46397 3.569V15.038M20.6683 18.2177C20.2678 18.2713 19.9022 18.4741 19.6447 18.7856C19.3873 19.0971 19.257 19.4943 19.2798 19.8978L20.0436 33.5121C20.0604 34.169 19.8164 34.8058 19.3649 35.2833C18.9135 35.7608 18.2912 36.04 17.6344 36.06C16.9776 36.04 16.3554 35.7608 15.904 35.2833C15.4525 34.8058 15.2085 34.169 15.2253 33.5121L15.7599 19.2591C15.7701 18.9961 15.7283 18.7337 15.6365 18.487C15.5448 18.2404 15.4049 18.0144 15.2253 17.822V2C15.2253 2 23.1746 2.33323 20.6475 18.2177H20.6683Z"
      stroke="#093030"
      strokeWidth={2.08276}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SVGComponent;
