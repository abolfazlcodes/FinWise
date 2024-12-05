import { IconEye, IconFacebook, IconGoogle } from '@/assets/icons';
import CustomButton from '@/components/ui/CustomButton';
import ForgetPassword from '@/components/ui/ForgetPassword';
import InputField from '@/components/ui/InputField';
import InputGroup from '@/components/ui/InputGroup';
import InputLabel from '@/components/ui/InputLabel';
import PageWrapper from '@/components/wrappers/PageWrapper';
import { getFontFamily } from '@/utils/fontFamily';
import { Link } from 'expo-router';
import { Text, View } from 'react-native';

const SignIn = () => {
  return (
    <PageWrapper title="welcome" customClasses={{ bodyWrapper: 'pt-[90px]' }}>
      <InputGroup>
        <InputLabel>Username or email</InputLabel>
        <InputField placeholder="example@example.com" />
      </InputGroup>

      <InputGroup>
        <InputLabel>Password</InputLabel>
        <InputField
          secureTextEntry
          placeholder="Your Password"
          icon={<IconEye className="fill-cyprus" />}
        />
      </InputGroup>

      <View className="max-w-[210px] mx-auto my-[67px] flex flex-col space-y-4">
        <CustomButton fontWeight="semibold" className="mb-4">
          Log In
        </CustomButton>

        <ForgetPassword />
      </View>

      {/* login with other platforms - link to sign up */}
      <View>
        <Text
          className="text-text text-xs text-center"
          style={{ fontFamily: getFontFamily('regular') }}>
          or sign in with
        </Text>

        {/* platforms */}
        <View className="my-5 flex flex-row items-center justify-center w-full">
          <IconFacebook className="mx-2" />
          <IconGoogle className="mx-2" />
        </View>

        <Text
          className="text-text text-xs text-center tracking-wide"
          style={{ fontFamily: getFontFamily('regular') }}>
          Don’t have an account?{' '}
          <Link href={'/(auth)/sign-up'} className="text-vividBlue">
            Sign Up
          </Link>
        </Text>
      </View>
    </PageWrapper>
  );
};

export default SignIn;
