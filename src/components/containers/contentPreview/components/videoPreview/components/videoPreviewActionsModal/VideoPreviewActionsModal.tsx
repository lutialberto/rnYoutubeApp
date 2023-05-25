import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ModalWrapper from '~/components/containers/modals/modalWrapper/ModalWrapper';

interface IVideoPreviewActionsModalProps {
  show: boolean;
  onClose: () => void;
}

const VideoPreviewActionsModal = (props: IVideoPreviewActionsModalProps) => {
  return (
    <ModalWrapper show={props.show} onClose={props.onClose}>
      <Text>VideoPreviewActionsModal</Text>
    </ModalWrapper>
  );
};

export default VideoPreviewActionsModal;

const styles = StyleSheet.create({});
