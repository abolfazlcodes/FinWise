import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import React, { ReactNode, useState } from 'react';
import { getFontFamily } from '@/utils/fontFamily';
import { ITabProps } from '@/types';

const Tab: React.FC<ITabProps> = ({ items }) => {
  const [activeTabId, setActiveTabId] = useState(items[0].id);

  const onChangeActiveTab = (id: number) => {
    setActiveTabId(id);
  };

  const contentToShow = items?.find((item) => item?.id === activeTabId);

  return (
    <View className="flex-col flex space-y-6">
      <TabHead>
        {items?.map((tab) => (
          <TabHeadItem
            isActive={activeTabId === tab.id}
            key={tab.id}
            onPress={() => onChangeActiveTab(tab.id)}>
            {tab.title}
          </TabHeadItem>
        ))}
      </TabHead>

      {/* content */}
      {contentToShow?.content}
    </View>
  );
};

export default Tab;

interface ITabHeadProps {
  children: ReactNode;
}

const TabHead: React.FC<ITabHeadProps> = ({ children }) => {
  return (
    <View className="bg-lightGreen flex-row items-center justify-between space-x-6 h-[60px] rounded-[22px] px-3 py-[5px]">
      {children}
    </View>
  );
};

interface ITabHeadItemProps extends TouchableOpacityProps {
  children: ReactNode | string;
  isActive: boolean;
}

const TabHeadItem: React.FC<ITabHeadItemProps> = ({ children, isActive, onPress, ...props }) => {
  return (
    <TouchableOpacity
      className={`flex-1 flex h-full items-center justify-center rounded-19 transition-all duration-300 ease-in ${isActive ? 'bg-caribbeanGreen' : 'bg-transparent'}`}
      onPress={onPress}
      {...props}>
      <Text
        className="text-center capitalize text-[15px] text-fenceGreen"
        style={{
          fontFamily: getFontFamily('regular'),
        }}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};
