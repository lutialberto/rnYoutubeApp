import {FlatList, Modal, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors} from '~/constants/Colors';
import {vh} from '~/constants/Dimensions';
import CommentHeader from '../../../commentHeader/CommentHeader';
import CommentForm from '../commentForm/CommentForm';
import {Comment, CommentListResponse} from '~/services/models/CommentListResponse';
import CommentItem from '../commentItem/CommentItem';

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
    <Modal animationType="slide" transparent={true} visible={props.show}>
      <View style={styles.modal}>
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
      </View>
    </Modal>
  );
};

export default CommentsOfComment;

const styles = StyleSheet.create({
  modal: {
    backgroundColor: colors.background,
    flex: 1,
    marginTop: vh * 25,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  separator: {
    height: 1,
    backgroundColor: 'gray',
  },
});
