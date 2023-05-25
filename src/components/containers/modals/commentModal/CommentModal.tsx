import {StyleSheet} from 'react-native';
import React from 'react';
import CommentHeader from './components/commentHeader/CommentHeader';
import CommentList from './components/commentList/CommentList';
import ModalWrapper from '../modalWrapper/ModalWrapper';

interface ICommentModal {
  show: boolean;
  onClose: () => void;
  onComment: () => void;
  numberOfComments: string;
}

const CommentModal = (props: ICommentModal) => {
  return (
    <ModalWrapper show={props.show} onClose={props.onClose}>
      <CommentHeader
        onclose={props.onClose}
        onFilterPress={() => {}}
        title="Comentarios de la publicación"
        numberOfComments={props.numberOfComments}
      />
      <CommentList onclose={props.onClose} />
    </ModalWrapper>
  );
};

export default CommentModal;

const styles = StyleSheet.create({});
