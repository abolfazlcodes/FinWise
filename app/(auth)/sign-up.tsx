import { Link } from 'expo-router';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignUp = () => {
  return (
    <SafeAreaView>
      <Link href={'/(auth)/sign-in'}>back to login</Link>
      <Text>Sign up page</Text>
    </SafeAreaView>
  );
};

export default SignUp;
