import { getFontFamily } from '@/utils/fontFamily';
import { Text, View } from 'react-native';

interface IInputLabelProps {
  children: React.ReactNode;
}

const InputLabel: React.FC<IInputLabelProps> = ({ children }) => {
  return (
    <View className="px-4">
      <Text
        className="text-text capitalize text-sm"
        style={{ fontFamily: getFontFamily('medium') }}>
        {children}
      </Text>
    </View>
  );
};

export default InputLabel;
