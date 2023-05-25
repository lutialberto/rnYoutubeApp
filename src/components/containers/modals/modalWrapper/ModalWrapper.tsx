import {Modal, Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import {colors} from '~/constants/Colors';
import {vh} from '~/constants/Dimensions';

interface IModalWrapperProps {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ModalWrapper = (props: IModalWrapperProps) => {
  return (
    <Modal animationType="slide" transparent={true} visible={props.show}>
      <Pressable onPress={props.onClose} style={styles.pressableClose} />
      <View style={styles.modal}>{props.children}</View>
    </Modal>
  );
};

export default ModalWrapper;

const styles = StyleSheet.create({
  pressableClose: {
    height: vh * 25,
    width: '100%',
  },
  modal: {
    backgroundColor: colors.background,
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
