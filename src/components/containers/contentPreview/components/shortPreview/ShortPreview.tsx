import {ImageBackground, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {vw} from '~/constants/Dimensions';
import {IShortPreviewProps} from './IShortPreviewProps';
import ActionIcon from '~/components/actionIcon/ActionIcon';

const ShortPreview = (props: IShortPreviewProps) => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}>
      {props.shorts.shorts.map(item => (
        <ImageBackground
          style={styles.item}
          key={item.id}
          source={{uri: item.image}}
          borderRadius={10}>
          <View style={{position: 'absolute', top: 10, right: 5}}>
            <ActionIcon onPress={() => {}} />
          </View>
          <Text numberOfLines={2} style={styles.title}>
            dasd sad sad sad sad asd sadsdsad sd
          </Text>
          {/* <Text style={styles.title}>{item.title}</Text> */}
          <Text style={styles.views}>{`${item.views} vistas`}</Text>
        </ImageBackground>
      ))}
    </ScrollView>
  );
};

export default ShortPreview;

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  item: {
    width: (vw * 100) / 2 - 20,
    aspectRatio: 2 / 3,
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    padding: 5,
  },
  views: {
    fontSize: 12,
    color: 'white',
    padding: 5,
  },
});
