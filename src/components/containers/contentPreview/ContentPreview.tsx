import {SectionList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SectionSeparator from './components/sectionSeparator/SectionSeparator';
import {IContentPreviewProps} from './IContentPreviewProps';
import VideoPreview from './components/videoPreview/VideoPreview';
import {
  IContentPreviewPoll,
  IContentPreviewShort,
  IContentPreviewVideo,
} from '~/services/models/ContentPreviewListResponse';
import PollPreview from './components/pollPreview/PollPreview';
import ShortPreview from './components/shortPreview/ShortPreview';

const ContentPreview = (props: IContentPreviewProps) => {
  return (
    <SectionList
      showsVerticalScrollIndicator={false}
      sections={props.sections}
      renderSectionHeader={() => <SectionSeparator />}
      renderItem={({item, section: {type}}) => (
        <>
          {type === 'videos' && (
            <VideoPreview
              video={item as IContentPreviewVideo}
              onActionPress={() => console.log('action pressed')}
              goToAuthorChanel={() => console.log('go to author chanel')}
              goToVideo={() => console.log('go to video')}
            />
          )}
          {type === 'polls' && (
            <PollPreview
              poll={item as IContentPreviewPoll}
              onLikePress={() => console.log('like pressed')}
              onCommentPress={() => console.log('comment pressed')}
              onDislikePress={() => console.log('dislike pressed')}
            />
          )}
          {type === 'shorts' && <ShortPreview shorts={item as IContentPreviewShort} />}
        </>
      )}
    />
  );
};

export default ContentPreview;

const styles = StyleSheet.create({});
