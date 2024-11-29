import { Link } from 'expo-router';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Page = () => {
  return (
    <SafeAreaView>
      <Link href={'/(auth)/welcome'}>Back to onboarding</Link>
      <Link href={'/(auth)/'}>login in page</Link>
      <Link href={'/(auth)sign-up'}>sign up page</Link>
      <Text>Index page</Text>
    </SafeAreaView>
  );
};

export default Page;
