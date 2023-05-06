import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IScreenContainerProps} from './IScreenContainerProps';
import {colors} from '~/constants/Colors';

const ScreenContainer = (props: IScreenContainerProps) => {
  return (
    <View
      style={[
        {
          flex: 1,
          backgroundColor: colors.background,
        },
        props.style,
      ]}>
      {props.children}
    </View>
  );
};

export default ScreenContainer;

const styles = StyleSheet.create({});
