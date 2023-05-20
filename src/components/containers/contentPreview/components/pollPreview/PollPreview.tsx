import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {IPollPreviewProps} from './IPollPreviewProps';
import PollPreviewHeader from './components/pollPreviewHeader/PollPreviewHeader';
import PollPreviewOptions from './components/pollPreviewOptions/PollPreviewOptions';
import PollPreviewInfo from './components/pollPreviewInfo/PollPreviewInfo';
import PollPreviewComments from './components/pollPreviewComments/PollPreviewComments';
import {colors} from '~/constants/Colors';
import {LikeStatus} from '~/models/LikeStatus';

const PollPreview = (props: IPollPreviewProps) => {
  const [liked, setLiked] = useState<LikeStatus>('notLiked');
  return (
    <View style={styles.container}>
      <PollPreviewHeader
        author={props.poll.header.author}
        authorImage={props.poll.header.authorImage}
        goToAuthorChanel={() => {}}
        publicationDate={props.poll.header.publicationDate}
        subscribed={props.poll.subscribed}
      />
      <Text style={styles.question}>{props.poll.question}</Text>
      <PollPreviewOptions options={props.poll.options} />
      <PollPreviewInfo
        responses={props.poll.responses}
        likes={props.poll.likes}
        comments={props.poll.comments}
        likeStatus={liked}
        onLikePress={() => {
          setLiked('liked');
          props.onLikePress();
        }}
        onCommentPress={props.onCommentPress}
        onDislikePress={() => {
          setLiked('disliked');
          props.onDislikePress();
        }}
      />
      <PollPreviewComments profileImage={props.poll.header.authorImage} />
    </View>
  );
};

export default PollPreview;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  question: {
    fontSize: 18,
    color: colors.font,
  },
});
