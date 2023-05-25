import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {IVideoPreviewProps} from './IVideoPreviewProps';
import VideoImagePreview from './components/videoImagePreview/VideoImagePreview';
import ChanelProfileIcon from '~/components/chanelProfileIcon/ChanelProfileIcon';
import VideoMainInfo from './components/videoMainInfo/VideoMainInfo';
import ActionIcon from '~/components/actionIcon/ActionIcon';
import VideoPreviewActionsModal from './components/videoPreviewActionsModal/VideoPreviewActionsModal';

const VideoPreview = (props: IVideoPreviewProps) => {
  const [showActions, setShowActions] = useState(false);

  return (
    <View>
      <VideoImagePreview
        duration={props.video.duration}
        image={props.video.image}
        onPress={props.goToVideo}
      />
      <View style={styles.row}>
        <ChanelProfileIcon
          image={props.video.header.authorImage}
          onPress={props.goToAuthorChanel}
        />
        <VideoMainInfo
          author={props.video.header.author}
          publicationDate={props.video.header.publicationDate}
          title={props.video.title}
          views={props.video.views}
          goToAuthorChanel={props.goToAuthorChanel}
          goToVideo={props.goToVideo}
        />
        <ActionIcon
          onPress={() => {
            setShowActions(true);
            props.onActionPress();
          }}
        />
      </View>
      <VideoPreviewActionsModal show={showActions} onClose={() => setShowActions(false)} />
    </View>
  );
};

export default VideoPreview;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
});
