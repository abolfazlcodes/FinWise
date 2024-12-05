import { View, Text } from 'react-native';
import React, { ReactNode } from 'react';
import { IconArrowUpContained } from '@/assets/icons';
import { getFontFamily } from '@/utils/fontFamily';
import { TFontType } from '@/constants/fonts';

interface IBalanceCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  variant?: 'typeA' | 'typeB' | 'typeC';
  type?: 'income' | 'expense';
  fontWeight?: TFontType;
}

const BalanceCard: React.FC<IBalanceCardProps> = ({
  title,
  value,
  icon,
  variant = 'typeA',
  fontWeight = 'bold',
  type = 'income',
}) => {
  if (variant === 'typeA') {
    return (
      <View className="flex-1">
        <View className="flex flex-row items-center gap-1">
          {icon}
          <Text
            className="text-text text-xs capitalize"
            style={{ fontFamily: getFontFamily('regular') }}>
            {title}
          </Text>
        </View>
        <Text
          className={`${type === 'income' ? 'text-honeydew' : 'text-oceanBlue'} text-2xl`}
          style={{ fontFamily: getFontFamily(fontWeight) }}>
          {value}
        </Text>
      </View>
    );
  }

  if (variant === 'typeB') {
    return (
      <View className="flex-1 flex flex-row gap-x-3">
        <View className="flex items-center justify-center">
          <IconArrowUpContained width={24} height={24} className="w-full h-full" />
        </View>

        <View className="flex flex-col items-start gap-1">
          <Text
            className="text-text text-xs capitalize"
            style={{ fontFamily: getFontFamily('regular') }}>
            {title}
          </Text>
          <Text
            className={`${type === 'income' ? 'text-honeydew' : 'text-oceanBlue'} text-2xl`}
            style={{ fontFamily: getFontFamily(fontWeight) }}>
            {value}
          </Text>
        </View>
      </View>
    );
  }

  if (variant === 'typeC') {
    return (
      <View className="flex-1 flex flex-col items-center justify-center w-[171px] h-[101px] pt-4 pb-3 px-7 bg-honeydew rounded-[14px] gap-y-1">
        {icon}
        <Text
          className="text-text capitalize text-xs"
          style={{ fontFamily: getFontFamily('regular') }}>
          {title}
        </Text>
        <Text
          className={`${type === 'income' ? 'text-text' : 'text-oceanBlue'} text-xl`}
          style={{ fontFamily: getFontFamily(fontWeight) }}>
          {value}
        </Text>
      </View>
    );
  }
};

export default BalanceCard;
