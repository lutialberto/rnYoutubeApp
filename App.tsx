import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import React from 'react';
import MainBottomTabNavigator from '~/navigation/MainBottomTabNavigator';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="dark-content" />
      <MainBottomTabNavigator />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
