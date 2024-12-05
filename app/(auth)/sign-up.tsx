import { IconEye } from '@/assets/icons';
import CustomButton from '@/components/ui/CustomButton';
import InputField from '@/components/ui/InputField';
import InputGroup from '@/components/ui/InputGroup';
import InputLabel from '@/components/ui/InputLabel';
import PageWrapper from '@/components/wrappers/PageWrapper';
import { getFontFamily } from '@/utils/fontFamily';
import { Link } from 'expo-router';
import { Text, View } from 'react-native';

const SignUp = () => {
  return (
    <PageWrapper title="create account" customClasses={{ bodyWrapper: 'pt-7 flex-[4]' }}>
      <InputGroup>
        <InputLabel>Full Name</InputLabel>
        <InputField placeholder="John Doe" />
      </InputGroup>

      <InputGroup>
        <InputLabel>Email</InputLabel>
        <InputField inputMode="email" placeholder="example@example.com" />
      </InputGroup>

      <InputGroup>
        <InputLabel>mobile number</InputLabel>
        <InputField inputMode="tel" placeholder="+1 123 456 789" />
      </InputGroup>

      <InputGroup>
        <InputLabel>date of birth</InputLabel>
        <InputField placeholder="DD/MM/YYYY" />
      </InputGroup>

      <InputGroup>
        <InputLabel>Password</InputLabel>
        <InputField
          secureTextEntry
          placeholder="Your Password"
          icon={<IconEye className="fill-cyprus" />}
        />
      </InputGroup>

      <InputGroup>
        <InputLabel>Confirm Password</InputLabel>
        <InputField
          secureTextEntry
          placeholder="Your Password"
          icon={<IconEye className="fill-cyprus" />}
        />
      </InputGroup>

      <View>
        <Text
          className="text-text-secondary text-xs text-center max-w-[273px] mx-auto"
          style={{ fontFamily: getFontFamily('regular') }}>
          By continuing, you agree to{' '}
          <Text style={{ fontFamily: getFontFamily('semibold') }}>Terms of Use</Text> and{' '}
          <Text style={{ fontFamily: getFontFamily('semibold') }}>Privacy Policy.</Text>
        </Text>

        <View className="max-w-[210px] mx-auto my-3 flex flex-col space-y-4">
          <CustomButton fontWeight="semibold">Sign Up</CustomButton>
        </View>

        <Text
          className="text-text text-xs text-center tracking-wide"
          style={{ fontFamily: getFontFamily('regular') }}>
          Already have an account?{' '}
          <Link href={'/(auth)/sign-in'} className="text-vividBlue">
            Log In
          </Link>
        </Text>
      </View>
    </PageWrapper>
  );
};

export default SignUp;
