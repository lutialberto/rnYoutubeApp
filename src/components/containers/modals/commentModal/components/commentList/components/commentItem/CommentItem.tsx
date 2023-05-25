import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TextInfo from '~/components/texts/textInfo/TextInfo';
import ActionIcon from '~/components/actionIcon/ActionIcon';
import ChanelProfileIcon from '~/components/chanelProfileIcon/ChanelProfileIcon';
import LikeContainer from '~/components/containers/likeContainer/LikeContainer';
import CommentsIcon from '~/assets/icons/Comments.svg';
import {colors} from '~/constants/Colors';
import {Comment} from '~/services/models/CommentListResponse';

interface ICommentItemProps {
  commentData: Comment;
  onCommentToCommentPress?: () => void;
  hideResponse?: boolean;
}

const CommentItem = (props: ICommentItemProps) => {
  return (
    <View style={[styles.container, styles.row]}>
      <ChanelProfileIcon image={props.commentData.profileImageUrl} onPress={() => {}} size={30} />
      <View style={styles.flex}>
        <TextInfo info={[props.commentData.name, props.commentData.date]} />
        <Text style={styles.comment}>{props.commentData.comment}</Text>
        <View style={[styles.row, {paddingTop: 10}]}>
          <LikeContainer
            likes={props.commentData.likes}
            onDislikePress={() => {}}
            onLikePress={() => {}}
            status="notLiked"
          />
          {!props.hideResponse && (
            <Pressable onPress={props.onCommentToCommentPress}>
              <CommentsIcon style={styles.icon} />
            </Pressable>
          )}
        </View>
        {!props.hideResponse && (
          <Pressable onPress={props.onCommentToCommentPress}>
            <Text style={styles.responses}>{props.commentData.responses} respuestas</Text>
          </Pressable>
        )}
      </View>
      <ActionIcon onPress={() => {}} />
    </View>
  );
};

export default CommentItem;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginRight: 10,
  },
  row: {
    flexDirection: 'row',
  },
  flex: {
    flex: 1,
  },
  comment: {
    color: colors.font,
    fontSize: 16,
  },
  icon: {
    width: 20,
    height: 20,
    color: colors.font,
    marginRight: 10,
  },
  responses: {
    color: colors.lightBlue,
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop: 20,
  },
});
