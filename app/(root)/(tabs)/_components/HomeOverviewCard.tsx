import { View, Text } from 'react-native';
import React from 'react';
import { IconCar, IconCash, IconFood } from '@/assets/icons';
import { getFontFamily } from '@/utils/fontFamily';
import BalanceCard from '@/components/ui/BalanceCard';

const HomeOverviewCard = () => {
  return (
    <View className="px-9 py-5 rounded-31 bg-caribbeanGreen flex-row items-center justify-between">
      <View className="flex-1 space-y-1">
        <View className="border-2 border-oceanBlue w-16 h-16 flex items-center justify-center mx-auto rounded-full">
          <IconCar />
        </View>
        <View>
          <Text
            className="text-center text-xs text-text"
            style={{
              fontFamily: getFontFamily('medium'),
            }}>
            Savings
          </Text>
          <Text
            className="text-center text-xs text-text"
            style={{
              fontFamily: getFontFamily('medium'),
            }}>
            on goals
          </Text>
        </View>
      </View>

      <View className="w-[2px] bg-honeydew h-full mx-4"></View>

      <View className="flex-[2]">
        <BalanceCard
          variant="typeB"
          title="Revenue Last Week"
          value={'$4000.00'}
          icon={<IconCash />}
          customClasses={{
            valueContent: 'text-base',
          }}
        />

        <View className="w-full bg-honeydew h-[2px] my-[11px]"></View>

        <BalanceCard
          variant="typeB"
          title="Food Last Week"
          value={'$100.00'}
          icon={<IconFood />}
          type="expense"
          customClasses={{
            valueContent: 'text-base',
          }}
        />
      </View>
    </View>
  );
};

export default HomeOverviewCard;
