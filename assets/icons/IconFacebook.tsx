import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SVGComponent = (props: SvgProps) => (
  <Svg
    width={35}
    height={35}
    viewBox="0 0 35 35"
    fill="none"
    // @ts-ignore
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M29.3981 28.42C32.1719 25.4018 33.7108 21.4519 33.7103 17.3527C33.7103 15.2048 33.2872 13.0779 32.4651 11.0936C31.643 9.10928 30.438 7.30635 28.9189 5.7878C27.3999 4.26925 25.5966 3.06482 23.612 2.24332C21.6274 1.42182 19.5005 0.999334 17.3527 1C13.0157 1 8.8563 2.72286 5.78958 5.78958C2.72286 8.85631 1 13.0157 1 17.3527C1.00026 21.0809 2.27434 24.6971 4.61134 27.602C6.94833 30.5068 10.208 32.5259 13.8496 33.3246V22.5616H9.15848V17.6776H13.8546V13.4384C13.8546 12.1444 14.3688 10.9035 15.2837 9.98849C16.1987 9.07352 17.4395 8.5595 18.7334 8.5595H23.0488V13.4435H20.6576C20.1473 13.4435 19.658 13.6462 19.2971 14.007C18.9363 14.3679 18.7334 14.8573 18.7334 15.3676V17.6776H23.4144V22.5616H18.7334V33.6495C22.8181 33.3046 26.6244 31.4382 29.3981 28.42Z"
      stroke="#0E3E3E"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SVGComponent;