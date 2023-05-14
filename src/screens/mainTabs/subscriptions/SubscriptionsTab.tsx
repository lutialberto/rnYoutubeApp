import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '~/components/containers/header/Header';
import ScreenContainer from '~/components/containers/screenContainer/ScreenContainer';

const SubscriptionsTab = () => {
  return (
    <ScreenContainer>
      <Header />
      <Text>SubscriptionsTab</Text>
    </ScreenContainer>
  );
};

export default SubscriptionsTab;

const styles = StyleSheet.create({});
