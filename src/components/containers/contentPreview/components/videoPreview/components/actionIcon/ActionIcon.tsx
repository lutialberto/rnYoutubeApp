import {Pressable, StyleSheet} from 'react-native';
import React from 'react';
import ActionsIcon from '~/assets/icons/ThreeDots.svg';
import {IActionIconProps} from './IActionIconProps';
import {colors} from '~/constants/Colors';

const ActionIcon = (props: IActionIconProps) => {
  return (
    <Pressable onPress={props.onPress}>
      <ActionsIcon style={styles.actions} />
    </Pressable>
  );
};

export default ActionIcon;

const styles = StyleSheet.create({
  actions: {
    width: 20,
    aspectRatio: 1,
    color: colors.font,
  },
});
