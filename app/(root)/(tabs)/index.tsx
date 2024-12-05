import PageWrapper from '@/components/wrappers/PageWrapper';
import { Text, View } from 'react-native';

const Home = () => {
  return (
    <PageWrapper
      title="Hi Abol, Welcome Back"
      subTitle="Good Morning"
      variant="typeB"
      headerChildren={<View className="border border-black"></View>}>
      <Text>fdsfs</Text>
    </PageWrapper>
  );
};

export default Home;
