import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '~/components/containers/header/Header';
import ScreenContainer from '~/components/containers/screenContainer/ScreenContainer';

const HomeTab = () => {
  return (
    <ScreenContainer>
      <Header />
      <Text>HomeTab</Text>
    </ScreenContainer>
  );
};

export default HomeTab;

const styles = StyleSheet.create({});
