import onboarding1 from '@/assets/images/onboarding1.png';
import onboarding2 from '@/assets/images/onboarding2.png';
import LogoImage from '@/assets/images/logo.png';

export const IMAGES = {
  onboarding1,
  onboarding2,
  LogoImage,
};

export const ONBOARDING_DATA: IOnBoardingProps[] = [
  {
    id: 1,
    image: IMAGES.onboarding1,
    title: 'Welcome to Expense Manager',
  },
  {
    id: 2,
    image: IMAGES.onboarding2,
    title: 'Are you ready to take control of your finances?',
  },
];
