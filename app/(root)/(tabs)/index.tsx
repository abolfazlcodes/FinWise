import { IconArrowDownContained, IconArrowUpContained, IconCash } from '@/assets/icons';
import BalanceCard from '@/components/ui/BalanceCard';
import PageWrapper from '@/components/wrappers/PageWrapper';
import { FlatList, Text, View } from 'react-native';
import Tab from '@/components/ui/Tab';
import HomeOverviewCard from '@/components/ui/HomeOverviewCard';
import { ITabItemProps } from '@/types';
import TransactionItem from '@/components/ui/TransactionItem';

const TABS_ITEMS: ITabItemProps[] = [
  {
    id: 1,
    title: 'daily',
    content: (
      <FlatList
        ItemSeparatorComponent={() => <View className="h-6" />}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        showsVerticalScrollIndicator={false}
        renderItem={(data) => (
          <TransactionItem
            title="salary"
            date="18:27 - April 30"
            category="monthly"
            type={data?.item % 2 === 0 ? 'expense' : 'income'}
            amount={'$4.000,00'}
            icon={<IconCash className="stroke-white [&_path]:stroke-white" />}
          />
        )}
      />
    ),
  },
  {
    id: 2,
    title: 'weekly',
    content: (
      <View className="border border-blue-500">
        <Text>weekly content</Text>
      </View>
    ),
  },
  {
    id: 3,
    title: 'monthly',
    content: (
      <View className="border border-blue-500">
        <Text>monthly content</Text>
      </View>
    ),
  },
];

const Home = () => {
  return (
    <PageWrapper
      title="Hi Abol, Welcome Back"
      subTitle="Good Morning"
      variant="typeB"
      headerChildren={
        <View className="">
          <View className=" flex-row items-start justify-between">
            <BalanceCard
              title="total balance"
              value={'$7,783.00'}
              icon={<IconArrowUpContained className="w-3 h-3" />}
            />

            <View className="w-[1px] bg-white h-full mx-[33px]"></View>

            <BalanceCard
              title="total expense"
              variant="typeA"
              type="expense"
              value={'$1.187.40'}
              fontWeight="semibold"
              icon={<IconArrowDownContained className="w-3 h-3" />}
            />
          </View>
        </View>
      }>
      <HomeOverviewCard />

      <View className="mt-6">
        <Tab items={TABS_ITEMS} />
      </View>
    </PageWrapper>
  );
};

export default Home;
