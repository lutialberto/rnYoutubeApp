import {FlatList, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import CommentHeader from '../../../commentHeader/CommentHeader';
import CommentForm from '../commentForm/CommentForm';
import {Comment, CommentListResponse} from '~/services/models/CommentListResponse';
import CommentItem from '../commentItem/CommentItem';
import ModalWrapper from '~/components/containers/modals/modalWrapper/ModalWrapper';

interface ICommentsOfCommentProps {
  show: boolean;
  onClose: () => void;
  numberOfComments: string;
  onGoBack: () => void;
}

const CommentsOfComment = (props: ICommentsOfCommentProps) => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const dataResponse: CommentListResponse = require('~/services/mockResponses/commentsMockResponse.json');
    setComments(dataResponse.comments);
  }, []);

  return (
    <ModalWrapper show={props.show} onClose={props.onClose}>
      <CommentHeader
        onclose={props.onClose}
        onFilterPress={() => {}}
        title="Comentarios de la publicación"
        numberOfComments={props.numberOfComments}
        hideFilter
        onGoBack={props.onGoBack}
      />
      <FlatList
        data={comments}
        renderItem={({item}) => <CommentItem commentData={item} hideResponse />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
      <CommentForm />
    </ModalWrapper>
  );
};

export default CommentsOfComment;

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: 'gray',
  },
});
