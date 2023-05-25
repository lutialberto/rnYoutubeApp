import {Modal, Pressable, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import React from 'react';
import {colors} from '~/constants/Colors';
import {vh} from '~/constants/Dimensions';

interface IModalWrapperProps {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
  childrenContainerStyles?: StyleProp<ViewStyle>;
}

const ModalWrapper = (props: IModalWrapperProps) => {
  return (
    <Modal animationType="slide" transparent={true} visible={props.show}>
      <Pressable onPress={props.onClose} style={styles.pressableClose} />
      <View style={[styles.modal, props.childrenContainerStyles]}>{props.children}</View>
    </Modal>
  );
};

export default ModalWrapper;

const styles = StyleSheet.create({
  pressableClose: {
    flex: 1,
    width: '100%',
  },
  modal: {
    height: vh * 75,
    backgroundColor: colors.background,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
