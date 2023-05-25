import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ModalWrapper from '~/components/containers/modals/modalWrapper/ModalWrapper';
import ClockIcon from '~/assets/icons/Clock.svg';
import DownloadIcon from '~/assets/icons/Download.svg';
import ShareIcon from '~/assets/icons/Share.svg';
import FlagIcon from '~/assets/icons/Flag.svg';
import BanIcon from '~/assets/icons/Ban.svg';
import ListIcon from '~/assets/icons/List.svg';
import SquarePlusIcon from '~/assets/icons/SquarePlus.svg';
import UserSlashIcon from '~/assets/icons/UserSlash.svg';
import {colors} from '~/constants/Colors';

interface IVideoPreviewActionsModalProps {
  show: boolean;
  onClose: () => void;
}

const VideoPreviewActionsModal = (props: IVideoPreviewActionsModalProps) => {
  const actions = [
    {
      icon: <ListIcon style={styles.icon} />,
      title: 'Reproducir el próximo video de la fila',
      onPress: () => console.log('dsa'),
    },
    {
      icon: <ClockIcon style={styles.icon} />,
      title: 'Guardar en Ver más tarde',
      onPress: () => console.log('dsa'),
    },
    {
      icon: <SquarePlusIcon style={styles.icon} />,
      title: 'Guardar en una lista de reproducción',
      onPress: () => console.log('dsa'),
    },
    {
      icon: <DownloadIcon style={styles.icon} />,
      title: 'Descargar video',
      onPress: () => console.log('dsa'),
    },
    {
      icon: <ShareIcon style={styles.icon} />,
      title: 'Compartir',
      onPress: () => console.log('dsa'),
    },
    {
      icon: <BanIcon style={styles.icon} />,
      title: 'No me interesa',
      onPress: () => console.log('dsa'),
    },
    {
      icon: <UserSlashIcon style={styles.icon} />,
      title: 'No recomendar el canal',
      onPress: () => console.log('dsa'),
    },
    {icon: <FlagIcon style={styles.icon} />, title: 'Denunciar', onPress: () => console.log('dsa')},
  ];
  return (
    <ModalWrapper
      show={props.show}
      onClose={props.onClose}
      childrenContainerStyles={styles.container}>
      {actions.map(action => (
        <Pressable key={action.title} style={styles.actionContainer} onPress={action.onPress}>
          {action.icon}
          <Text style={styles.title}>{action.title}</Text>
        </Pressable>
      ))}
    </ModalWrapper>
  );
};

export default VideoPreviewActionsModal;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: 'auto',
    gap: 20,
    backgroundColor: colors.cardBackground,
    margin: 5,
  },
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  icon: {
    color: colors.font,
    aspectRatio: 1,
    width: 20,
  },
  title: {
    color: colors.font,
  },
});
