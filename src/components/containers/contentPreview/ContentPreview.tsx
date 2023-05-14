import {SectionList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SectionSeparator from './components/sectionSeparator/SectionSeparator';
import {IContentPreviewProps} from './IContentPreviewProps';
import VideoPreview from './components/videoPreview/VideoPreview';

const ContentPreview = (props: IContentPreviewProps) => {
  return (
    <SectionList
      showsVerticalScrollIndicator={false}
      sections={props.sections}
      keyExtractor={(item, index) => item.id + index}
      renderSectionHeader={({section: {type, data}}) => (
        <>
          <SectionSeparator />
          {type === 'shorts' && (
            <>
              <Text style={{fontWeight: 'bold'}}>{type}</Text>
              {data.map(item => (
                <View style={styles.item} key={item.id}>
                  <Text style={styles.title}>{item.title}</Text>
                </View>
              ))}
            </>
          )}
        </>
      )}
      renderItem={({item, section: {type}}) => (
        <>
          {type === 'videos' && (
            <VideoPreview
              video={item}
              onActionPress={() => console.log('action pressed')}
              goToAuthorChanel={() => console.log('go to author chanel')}
              goToVideo={() => console.log('go to video')}
            />
          )}
        </>
      )}
    />
  );
};

export default ContentPreview;

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
  },
  title: {
    fontSize: 24,
  },
});
