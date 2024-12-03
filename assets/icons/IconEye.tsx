import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SVGComponent = (props: SvgProps) => (
  <Svg
    width={26}
    height={11}
    viewBox="0 0 26 11"
    fill="none"
    // @ts-ignore
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M2.81442 1C8.31712 8.32781 17.113 8.55139 22.815 1.66714C22.9933 1.45438 23.1646 1.2308 23.3394 1M13.0752 6.66895V10M18.6303 5.20123L20.4447 8.42157M22.8115 1.66715L25.1364 3.83447M7.50955 5.20123L5.69512 8.42157M3.32484 1.66715L1 3.83447"
      stroke="#0E3E3E"
      strokeWidth={1.63636}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SVGComponent;