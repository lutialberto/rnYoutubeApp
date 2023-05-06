import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {colors} from '~/constants/Colors';
import HomeIcon from '~/assets/icons/Home.svg';
import ShortsIcon from '~/assets/icons/Shorts.svg';
import SubscriptionsIcon from '~/assets/icons/Subscriptions.svg';
import LibraryIcon from '~/assets/icons/Library.svg';
import {HomeTab, ShortsTab, SubscriptionsTab} from '~/screens/mainTabs';

const Tab = createBottomTabNavigator();

const MainBottomTabNavigator = () => {
  const tabs = [
    {
      name: 'Home',
      label: 'Principal',
      component: HomeTab,
      icon: (color: string) => <HomeIcon style={{color}} />,
    },
    {
      name: 'Shorts',
      label: 'Shorts',
      component: ShortsTab,
      icon: (color: string) => <ShortsIcon style={{color}} />,
    },
    {
      name: 'Subscriptions',
      label: 'Suscripciones',
      component: SubscriptionsTab,
      icon: (color: string) => <SubscriptionsIcon style={{color}} />,
    },
    {
      name: 'Library',
      label: 'Librería',
      component: ShortsTab,
      icon: (color: string) => <LibraryIcon style={{color}} />,
    },
  ];

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            paddingTop: 5,
            height: 60,
            backgroundColor: colors.background,
          },
        }}>
        {tabs.map(tab => (
          <Tab.Screen
            key={tab.name}
            name={tab.name}
            component={tab.component}
            options={{
              tabBarIcon: ({focused}) => tab.icon(focused ? colors.primary : colors.font),
              tabBarLabel: ({focused}) => (
                <Text style={{color: focused ? colors.primary : colors.font}}>{tab.label}</Text>
              ),
              tabBarItemStyle: {paddingBottom: 10},
            }}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainBottomTabNavigator;

const styles = StyleSheet.create({});
