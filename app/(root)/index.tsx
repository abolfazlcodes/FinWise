import { Link } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Page = () => {
  return (
    <SafeAreaView>
      <Link href={"/(auth)/welcome"}>Back to onboarding</Link>
      <Text>Index page</Text>
    </SafeAreaView>
  );
};

export default Page;
