import { View, Text } from 'react-native';
import React, { ReactNode } from 'react';

interface ITabItemWrapperProp {
  children: ReactNode | string;
  isActive: boolean;
}

const TabItemWrapper: React.FC<ITabItemWrapperProp> = ({ children, isActive }) => {
  return (
    <View
      className={`w-14 h-14 flex items-center justify-center rounded-3xl ${isActive ? 'bg-caribbeanGreen' : ''}`}>
      {children}
    </View>
  );
};

export default TabItemWrapper;
