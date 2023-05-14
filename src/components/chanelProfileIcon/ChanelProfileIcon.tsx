import {Image, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {IChanelProfileIconProps} from './IChanelProfileIconProps';

const ChanelProfileIcon = ({size = 50, ...props}: IChanelProfileIconProps) => {
  return (
    <Pressable onPress={props.onPress}>
      <Image source={{uri: props.image}} style={[styles.authorImg, {width: size}]} />
    </Pressable>
  );
};

export default ChanelProfileIcon;

const styles = StyleSheet.create({
  authorImg: {
    aspectRatio: 1,
    borderRadius: 50,
    marginHorizontal: 10,
  },
});
