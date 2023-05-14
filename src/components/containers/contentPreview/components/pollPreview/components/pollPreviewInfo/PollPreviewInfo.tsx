import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IPollPreviewInfoProps} from './IPollPreviewInfoProps';
import LikeIcon from '~/assets/icons/Like.svg';
import DislikeIcon from '~/assets/icons/Dislike.svg';
import CommentsIcon from '~/assets/icons/Comments.svg';
import {colors} from '~/constants/Colors';

const PollPreviewInfo = (props: IPollPreviewInfoProps) => {
  const answers = `${props.responses} votos`;
  const likeStyle = [styles.icon, props.likeStatus === 'liked' && {color: colors.blue}];
  const dislikeStyle = [styles.icon, props.likeStatus === 'disliked' && {color: colors.blue}];

  return (
    <View>
      <Text>{answers}</Text>
      <View style={[styles.interactionsContainer, styles.row]}>
        <Pressable onPress={props.onLikePress} style={styles.row}>
          <LikeIcon style={likeStyle} />
          <Text style={styles.text}>{props.likes}</Text>
        </Pressable>
        <Pressable onPress={props.onDislikePress} style={styles.dislike}>
          <DislikeIcon style={dislikeStyle} />
        </Pressable>
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
