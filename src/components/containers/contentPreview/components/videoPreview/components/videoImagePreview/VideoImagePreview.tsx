import {ImageBackground, Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';
import {IVideoImagePreviewProps} from './IVideoImagePreviewProps';
import {colors} from '~/constants/Colors';

const VideoImagePreview = (props: IVideoImagePreviewProps) => {
  const durationHH = Math.floor(props.duration / 3600);
  const durationMM = Math.floor((props.duration - durationHH * 3600) / 60);
  const durationSS = props.duration - durationHH * 3600 - durationMM * 60;
  const durationFormatted = `${durationHH ? durationHH + ':' : ''}${
    durationMM < 10 && durationHH != 0 ? '0' : ''
  }${durationMM}:${durationSS < 10 ? '0' : ''}${durationSS}`;

  return (
    <Pressable onPress={props.onPress}>
      <ImageBackground source={{uri: props.image}} style={styles.img}>
        <Text style={styles.duration}>{durationFormatted}</Text>
      </ImageBackground>
    </Pressable>
  );
};

export default VideoImagePreview;

const styles = StyleSheet.create({
  img: {
    width: '100%',
    aspectRatio: 16 / 9,
    justifyContent: 'flex-end',
  },
  duration: {
    color: colors.font,
    textAlign: 'center',
    alignSelf: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.6)',
    margin: 8,
    paddingVertical: 2,
    paddingHorizontal: 4,
    fontSize: 12,
    borderRadius: 4,
  },
});
