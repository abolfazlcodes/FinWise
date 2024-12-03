import { getFontFamily } from '@/utils/fontFamily';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface IPageWrapperProps {
  children: React.ReactNode;
  title: string;
  customClasses?: {
    wrapper?: string;
    headerWrapper?: string;
    bodyWrapper?: string;
  };
}

const PageWrapper: React.FC<IPageWrapperProps> = ({ children, title, customClasses }) => {
  return (
    <SafeAreaView className={`bg-caribbeanGreen flex h-full w-full`}>
      {/* header of the wrapper - title */}
      <View className="flex-1 w-full flex items-center justify-center text-center">
        <Text
          className="text-3xl text-text capitalize"
          style={{
            fontFamily: getFontFamily('semibold'),
          }}>
          {title}
        </Text>
      </View>

      {/* body of the wrapper - whatever given to it */}
      <View
        className={`bg-honeydew flex-[3] rounded-t-[70px] px-9 pt-7 pb-20 ${customClasses?.bodyWrapper}`}>
        {children}
      </View>
    </SafeAreaView>
  );
};

export default PageWrapper;
