import {FlatList, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import CommentForm from './components/commentForm/CommentForm';
import CommentItem from './components/commentItem/CommentItem';
import {Comment, CommentListResponse} from '~/services/models/CommentListResponse';
import CommentsOfComment from './components/commentsOfComment/CommentsOfComment';

interface ICommentListProps {
  onclose: () => void;
}

const CommentList = (props: ICommentListProps) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [showCommentsOfComment, setShowCommentsOfComment] = useState(false);

  useEffect(() => {
    const dataResponse: CommentListResponse = require('~/services/mockResponses/commentsMockResponse.json');
    setComments(dataResponse.comments);
  }, []);

  return (
    <View>
      <CommentsOfComment
        show={showCommentsOfComment}
        onClose={() => {
          setShowCommentsOfComment(false);
          props.onclose();
        }}
        numberOfComments=""
        onGoBack={() => setShowCommentsOfComment(false)}
      />
      <FlatList
        data={comments}
        renderItem={({item}) => (
          <CommentItem
            commentData={item}
            onCommentToCommentPress={() => setShowCommentsOfComment(true)}
          />
        )}
        ListHeaderComponent={CommentForm}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

export default CommentList;

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: 'gray',
  },
});
