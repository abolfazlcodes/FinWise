import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Text className="text-red-500 text-2xl font-bold">
        Hello World Finwise
      </Text>
    </SafeAreaView>
  );
}
