import {StyleSheet, View} from 'react-native';
import React from 'react';
import {IVideoPreviewProps} from './IVideoPreviewProps';
import VideoImagePreview from './components/videoImagePreview/VideoImagePreview';
import ChanelProfileIcon from '~/components/chanelProfileIcon/ChanelProfileIcon';
import VideoMainInfo from './components/videoMainInfo/VideoMainInfo';
import ActionIcon from './components/actionIcon/ActionIcon';

const VideoPreview = (props: IVideoPreviewProps) => {
  return (
    <View>
      <VideoImagePreview
        duration={props.video.duration}
        image={props.video.image}
        onPress={props.goToVideo}
      />
      <View style={styles.row}>
        <ChanelProfileIcon image={props.video.authorImage} onPress={props.goToAuthorChanel} />
        <VideoMainInfo
          author={props.video.author}
          publicationDate={props.video.publicationDate}
          title={props.video.title}
          views={props.video.views}
          goToAuthorChanel={props.goToAuthorChanel}
          goToVideo={props.goToVideo}
        />
        <ActionIcon onPress={props.onActionPress} />
      </View>
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
