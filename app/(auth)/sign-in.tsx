import { IconEye } from '@/assets/icons';
import CustomButton from '@/components/ui/CustomButton';
import ForgetPassword from '@/components/ui/ForgetPassword';
import InputField from '@/components/ui/InputField';
import InputGroup from '@/components/ui/InputGroup';
import InputLabel from '@/components/ui/InputLabel';
import PageWrapper from '@/components/wrappers/PageWrapper';
import { Text, TouchableOpacity, View } from 'react-native';

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

      <View className="max-w-[210px] mx-auto mt-[67px] flex flex-col space-y-4">
        <CustomButton fontWeight="semibold" className="mb-4">
          Log In
        </CustomButton>

        <ForgetPassword />

        <CustomButton variant="secondary" fontWeight="semibold">
          Sign Up
        </CustomButton>
      </View>
    </PageWrapper>
  );
};

export default SignIn;
