import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IPollPreviewInfoProps} from './IPollPreviewInfoProps';
import CommentsIcon from '~/assets/icons/Comments.svg';
import {colors} from '~/constants/Colors';
import LikeContainer from '~/components/containers/likeContainer/LikeContainer';

const PollPreviewInfo = (props: IPollPreviewInfoProps) => {
  const answers = `${props.responses} votos`;

  return (
    <View>
      <Text>{answers}</Text>
      <View style={[styles.interactionsContainer, styles.row]}>
        <LikeContainer
          likes={props.likes}
          status={props.likeStatus}
          onLikePress={props.onLikePress}
          onDislikePress={props.onDislikePress}
        />
        <View style={styles.gap} />
        <Pressable onPress={props.onCommentPress} style={styles.row}>
          <CommentsIcon style={styles.icon} />
          <Text style={styles.text}>{props.comments}</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default PollPreviewInfo;

const styles = StyleSheet.create({
  answer: {
    color: 'gray',
  },
  interactionsContainer: {
    marginVertical: 15,
  },
  row: {
    flexDirection: 'row',
  },
  icon: {
    width: 20,
    height: 20,
    color: colors.font,
    marginRight: 10,
  },
  text: {
    color: colors.font,
  },
  dislike: {
    marginLeft: 10,
    paddingLeft: 10,
  },
  gap: {
    flex: 1,
  },
});
