import CustomButton from '@/components/ui/CustomButton';
import { IMAGES } from '@/constants';
import { getFontFamily } from '@/utils/fontFamily';
import { router } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const AuthPage = () => {
  const onPressLogin = () => {
    router.replace('/(auth)/sign-in');
  };

  const onPressSignUp = () => {
    router.replace('/(auth)/sign-up');
  };

  return (
    <SafeAreaView className="bg-honeydew flex flex-1 w-full h-full items-center justify-center border border-black">
      <View className="w-[110px] h-[110px] flex items-center justify-center">
        <Image source={IMAGES?.LogoImage} className="w-[110px] h-[110px]" resizeMode="contain" />
      </View>

      <View className="flex items-center justify-center flex-col max-w-[236px]">
        <Text
          className="text-[52px] text-center text-caribbeanGreen"
          style={{
            fontFamily: getFontFamily('semibold'),
          }}>
          FinWise
        </Text>
        <Text className="text-sm text-center text-text-secondary">
          Start managing your income and expenses, set goals and see the progress.
        </Text>
      </View>

      <View className="flex flex-col gap-y-3 mt-10 mb-3">
        <CustomButton onPress={onPressLogin}>Log In</CustomButton>
        <CustomButton variant="secondary" onPress={onPressSignUp}>
          Sign Up
        </CustomButton>
      </View>

      <TouchableOpacity>
        <Text className="text-text text-sm font-semibold text-center">Forgot Password?</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AuthPage;
