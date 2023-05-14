import {Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';
import {ITagProps} from './ITagProps';
import {colors} from '~/constants/Colors';

const Tag = ({active = false, onPress = () => {}, icon = <></>, ...props}: ITagProps) => {
  const containerStyle = [styles.container, active && styles.containerActive];
  const nameStyle = [styles.title, active && styles.titleActive];

  return (
    <Pressable onPress={onPress} style={containerStyle}>
      {icon}
      {props.name && <Text style={nameStyle}>{props.name}</Text>}
    </Pressable>
  );
};

export default Tag;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.cardBackground,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignSelf: 'center',
    flexDirection: 'row',
    gap: 5,
  },
  title: {
    color: colors.font,
    fontSize: 16,
  },
  containerActive: {
    backgroundColor: colors.font,
  },
  titleActive: {
    color: colors.background,
  },
});
