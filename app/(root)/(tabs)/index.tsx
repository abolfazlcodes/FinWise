import { IconArrowDownContained, IconArrowUpContained } from '@/assets/icons';
import BalanceCard from '@/components/ui/BalanceCard';
import PageWrapper from '@/components/wrappers/PageWrapper';
import { View } from 'react-native';

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
              value={'-$1.187.40'}
              fontWeight="semibold"
              icon={<IconArrowDownContained className="w-3 h-3" />}
            />
          </View>
        </View>
      }>
      <BalanceCard
        title="total expense"
        variant="typeC"
        type="expense"
        value={'-$1.187.40'}
        fontWeight="semibold"
        icon={<IconArrowDownContained width={25} height={25} />}
      />
    </PageWrapper>
  );
};

export default Home;
