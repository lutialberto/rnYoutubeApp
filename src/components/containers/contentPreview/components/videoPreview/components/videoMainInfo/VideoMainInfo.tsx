import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IVideoMainInfoProps} from './IVideoMainInfoProps';
import {colors} from '~/constants/Colors';
import TextInfo from '~/components/texts/textInfo/TextInfo';

const VideoMainInfo = (props: IVideoMainInfoProps) => {
  const info = [props.author, `${props.views} vistas`, `hace ${props.publicationDate}`];

  return (
    <View style={styles.container}>
      <Pressable onPress={props.goToVideo}>
        <Text style={styles.title}>{props.title}</Text>
      </Pressable>
      <Pressable onPress={props.goToAuthorChanel}>
        <TextInfo info={info} />
      </Pressable>
    </View>
  );
};

export default VideoMainInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.font,
  },
});
