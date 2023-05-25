import {Modal, StyleSheet, View} from 'react-native';
import React from 'react';
import {vh} from '~/constants/Dimensions';
import CommentHeader from './components/commentHeader/CommentHeader';
import CommentList from './components/commentList/CommentList';
import {colors} from '~/constants/Colors';

interface ICommentModal {
  show: boolean;
  onClose: () => void;
  onComment: () => void;
  numberOfComments: string;
}

const CommentModal = (props: ICommentModal) => {
  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={props.show}>
        <View style={styles.modal}>
          <CommentHeader
            onclose={props.onClose}
            onFilterPress={() => {}}
            title="Comentarios de la publicación"
            numberOfComments={props.numberOfComments}
          />
          <CommentList onclose={props.onClose} />
        </View>
      </Modal>
    </View>
  );
};

export default CommentModal;

const styles = StyleSheet.create({
  modal: {
    backgroundColor: colors.background,
    flex: 1,
    marginTop: vh * 25,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
