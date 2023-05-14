import {Image, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {IChanelProfileIconProps} from './IChanelProfileIconProps';

const ChanelProfileIcon = (props: IChanelProfileIconProps) => {
  return (
    <Pressable onPress={props.onPress}>
      <Image source={{uri: props.image}} style={styles.authorImg} />
    </Pressable>
  );
};

export default ChanelProfileIcon;

const styles = StyleSheet.create({
  authorImg: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginHorizontal: 10,
  },
});
