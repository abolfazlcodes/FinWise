import { View } from "react-native";

interface IDotProps {
  isActive?: boolean;
}

const Dot: React.FC<IDotProps> = ({ isActive = false }) => {
  return (
    <View
      className={`w-[13px] h-[13px] rounded-full mx-1 ${
        isActive ? "border border-cyprus" : "border-none bg-caribbeanGreen"
      }`}
    />
  );
};

export default Dot;
