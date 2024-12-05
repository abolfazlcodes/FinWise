import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SVGComponent = (props: SvgProps) => (
  <Svg
    width={24}
    height={29}
    viewBox="0 0 24 29"
    fill="none"
    // @ts-ignore
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M1.76856 19.3287C1.23053 20.6656 0.970146 22.0944 1.00272 23.5313C1.00272 29.4896 22.9864 29.4896 22.9973 23.5313C23.0299 22.0944 22.7695 20.6656 22.2315 19.3287C21.6935 17.9919 20.8886 16.7739 19.8642 15.7464C18.8397 14.7188 17.6164 13.9024 16.2659 13.345C14.9155 12.7876 13.4651 12.5005 12 12.5005C10.5349 12.5005 9.08451 12.7876 7.73405 13.345C6.38359 13.9024 5.16026 14.7188 4.13584 15.7464C3.11142 16.7739 2.30659 17.9919 1.76856 19.3287Z"
      stroke="#052224"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11.9919 9.66262C14.4303 9.66262 16.4071 7.72342 16.4071 5.33131C16.4071 2.93919 14.4303 1 11.9919 1C9.55339 1 7.57663 2.93919 7.57663 5.33131C7.57663 7.72342 9.55339 9.66262 11.9919 9.66262Z"
      stroke="#052224"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SVGComponent;