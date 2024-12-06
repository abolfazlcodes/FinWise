import { View, Text } from 'react-native';
import React, { ReactNode } from 'react';
import { IconCash } from '@/assets/icons';
import { getFontFamily } from '@/utils/fontFamily';
import { TTransactionType } from '@/types';

interface ITransactionItemProps {
  type?: TTransactionType;
  icon: ReactNode;
  title: string;
  date: string;
  category: string;
  amount: number | string;
}

const TransactionItem: React.FC<ITransactionItemProps> = ({
  title,
  amount,
  category,
  date,
  icon,
  type,
}) => {
  return (
    <View className="min-h-[53px] flex-row items-center justify-between space-x-2">
      <View className="bg-lightBlue rounded-22 flex items-center justify-center w-[50px] h-[50px]">
        {icon}
      </View>
      <View className="flex-[2] flex-col flex-shrink-0">
        <Text
          className="text-[15px] capitalize text-fenceGreen"
          style={{ fontFamily: getFontFamily('medium') }}>
          {title}
        </Text>
        <Text
          className="text-xs capitalize text-oceanBlue"
          style={{ fontFamily: getFontFamily('semibold') }}>
          {date}
        </Text>
      </View>

      <View className="w-[1px] bg-caribbeanGreen h-3/4" />

      <View className="flex-[1] flex-shrink-0 flex items-center justify-center">
        <Text
          className="text-center text-xs capitalize"
          style={{ fontFamily: getFontFamily('light') }}>
          {category}
        </Text>
      </View>

      <View className="w-[1px] bg-caribbeanGreen h-3/4" />

      <View className="flex-[2] flex-shrink-0 flex items-center justify-center">
        <Text
          className={`${type === 'expense' ? 'text-oceanBlue' : 'text-fenceGreen'} text-sm text-center`}
          style={{ fontFamily: getFontFamily('medium') }}>
          {type === 'expense' && '-'}
          {amount}
        </Text>
      </View>
    </View>
  );
};

export default TransactionItem;
