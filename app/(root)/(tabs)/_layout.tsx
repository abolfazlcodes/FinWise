import { IconAnalysis, IconCategories, IconHome, IconTransactions, IconUser } from '@/assets/icons';
import TabItemWrapper from '@/components/wrappers/TabItemWrapper';
import { Tabs } from 'expo-router';

const Layout = () => {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        tabBarActiveTintColor: '#00d09e',
        tabBarInactiveTintColor: '#fff',
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#dff7e2',
          paddingTop: 35,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          paddingBottom: 0,
          height: 100,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabItemWrapper isActive={focused}>
              <IconHome />
            </TabItemWrapper>
          ),
        }}
      />
      <Tabs.Screen
        name="analysis"
        options={{
          title: 'Analysis',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabItemWrapper isActive={focused}>
              <IconAnalysis />
            </TabItemWrapper>
          ),
        }}
      />
      <Tabs.Screen
        name="transaction"
        options={{
          title: 'Transactions',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabItemWrapper isActive={focused}>
              <IconTransactions />
            </TabItemWrapper>
          ),
        }}
      />
      <Tabs.Screen
        name="categories"
        options={{
          title: 'Categories',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabItemWrapper isActive={focused}>
              <IconCategories />
            </TabItemWrapper>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabItemWrapper isActive={focused}>
              <IconUser />
            </TabItemWrapper>
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
