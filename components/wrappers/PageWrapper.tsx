import { IconArrowLeft, IconNotification } from '@/assets/icons';
import { getFontFamily } from '@/utils/fontFamily';
import { Link } from 'expo-router';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface IPageWrapperProps {
  children: React.ReactNode;
  title: string;
  subTitle?: string;
  headerChildren?: React.ReactNode;
  variant?: 'typeA' | 'typeB';
  hasBackIcon?: boolean;
  customClasses?: {
    wrapper?: string;
    headerWrapper?: string;
    bodyWrapper?: string;
  };
}

const PageWrapper: React.FC<IPageWrapperProps> = ({
  children,
  variant = 'typeA',
  title,
  subTitle,
  customClasses,
  hasBackIcon,
  headerChildren,
}) => {
  return (
    <SafeAreaView className={`bg-caribbeanGreen flex h-full w-full, ${customClasses?.wrapper}`}>
      {/* header of the wrapper - title */}
      {variant === 'typeA' ? (
        <View
          className={`flex-1 w-full flex items-center justify-center text-center ${customClasses?.headerWrapper}`}>
          <Text
            className="text-3xl text-text capitalize"
            style={{
              fontFamily: getFontFamily('semibold'),
            }}>
            {title}
          </Text>
        </View>
      ) : (
        <View
          className={`flex-1 w-full space-y-10 pt-6 flex text-center px-9 ${customClasses?.headerWrapper}`}>
          <View className="flex flex-row items-center justify-between">
            {hasBackIcon && (
              <View className="w-6 h-6 flex items-center justify-center">
                <IconArrowLeft />
              </View>
            )}

            <View className="">
              <Text
                className="text-lg text-fenceGreen capitalize leading-[22px]"
                style={{
                  fontFamily: getFontFamily('semibold'),
                }}>
                {title}
              </Text>
              {subTitle && (
                <Text
                  className="text-xs text-fenceGreen leading-[14px]"
                  style={{
                    fontFamily: getFontFamily('regular'),
                  }}>
                  {subTitle}
                </Text>
              )}
            </View>

            <View className="w-[30px] h-[30px] rounded-full flex items-center justify-center bg-white">
              <Link href={'/(root)/(tabs)/transaction'}>
                <IconNotification className="fill-text" />
              </Link>
            </View>
          </View>

          {headerChildren}
        </View>
      )}

      {/* body of the wrapper - whatever given to it */}
      <View
        className={`bg-honeydew flex-[3] rounded-t-[70px] px-9 pt-7 pb-20 ${customClasses?.bodyWrapper}`}>
        {children}
      </View>
    </SafeAreaView>
  );
};

export default PageWrapper;
