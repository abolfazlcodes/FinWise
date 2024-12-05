import PageWrapper from '@/components/wrappers/PageWrapper';
import { Text } from 'react-native';

const Transaction = () => {
  return (
    <PageWrapper title="Transaction" variant="typeB" hasBackIcon>
      <Text>transactions</Text>
    </PageWrapper>
  );
};

export default Transaction;
