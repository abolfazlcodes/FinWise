import { TFontType } from '@/constants/fonts';
import { getFontFamily } from '@/utils/fontFamily';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface ICustomButtonProps extends TouchableOpacityProps {
  variant?: 'primary' | 'secondary';
  size?: 'full' | 'small' | 'medium' | 'large';
  IconLeft?: React.ComponentType<any>;
  IconRight?: React.ComponentType<any>;
  className?: string;
  fontWeight?: TFontType;
}

const getBgVariantStyles = (variant: ICustomButtonProps['variant']) => {
  switch (variant) {
    case 'secondary': {
      return 'bg-lightGreen';
    }

    default: {
      return 'bg-caribbeanGreen ';
    }
  }
};

const getSizeVariantStyles = (variant: ICustomButtonProps['size']) => {
  switch (variant) {
    case 'full': {
      return 'w-full';
    }
    case 'large': {
      return 'min-w-[350px]';
    }
    case 'medium': {
      return 'min-w-[200px]';
    }

    default: {
      return 'min-w-[130px]';
    }
  }
};

const getTextSizeVariantStyles = (variant: ICustomButtonProps['size']) => {
  switch (variant) {
    case 'full': {
      return 'text-3xl';
    }
    case 'large': {
      return 'text-2xl';
    }
    case 'medium': {
      return 'text-xl';
    }

    default: {
      return 'text-sm';
    }
  }
};

const CustomButton: React.FC<ICustomButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'medium',
  onPress,
  IconLeft,
  IconRight,
  fontWeight = 'medium',
  ...props
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`text-text min-h-[45px] rounded-3xl flex items-center justify-center text-center ${getBgVariantStyles(variant)} ${getSizeVariantStyles(size)} ${className}`}
      {...props}>
      {IconLeft && <IconLeft />}

      <Text
        className={`leading-5 ${getTextSizeVariantStyles(size)}`}
        style={{
          fontFamily: getFontFamily(fontWeight),
        }}>
        {children}
      </Text>

      {IconRight && <IconRight />}
    </TouchableOpacity>
  );
};

export default CustomButton;
