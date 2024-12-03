import React from 'react';
import { View } from 'react-native';

interface IInputGroupProps {
  children: React.ReactNode;
}

const InputGroup: React.FC<IInputGroupProps> = ({ children }) => {
  return <View className="flex flex-col gap-y-2 mb-6">{children}</View>;
};

export default InputGroup;
