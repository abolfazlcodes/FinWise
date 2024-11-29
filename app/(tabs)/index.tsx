import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Text
        style={{
          fontFamily: "PoppinsBlackItalic",
        }}
        className="text-2xl text-cyprus"
      >
        Hello World Finwise
      </Text>
      <Text
        className="text-vividBlue"
        style={{
          fontFamily: "PoppinsExtraBold",
        }}
      >
        Good Evening, Abolfazl
      </Text>
    </SafeAreaView>
  );
}
