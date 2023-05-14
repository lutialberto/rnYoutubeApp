import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ScreenContainer from '~/components/containers/screenContainer/ScreenContainer';
import Header from '~/components/containers/header/Header';

const LibraryTab = () => {
  return (
    <ScreenContainer>
      <Header />
      <Text>LibraryTab</Text>
    </ScreenContainer>
  );
};

export default LibraryTab;

const styles = StyleSheet.create({});
