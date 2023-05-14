import {StyleSheet} from 'react-native';
import React from 'react';
import Header from '~/components/containers/header/Header';
import ScreenContainer from '~/components/containers/screenContainer/ScreenContainer';
import Tags from './components/tags/Tags';

const HomeTab = () => {
  return (
    <ScreenContainer>
      <Header />
      <Tags />
    </ScreenContainer>
  );
};

export default HomeTab;

const styles = StyleSheet.create({});
