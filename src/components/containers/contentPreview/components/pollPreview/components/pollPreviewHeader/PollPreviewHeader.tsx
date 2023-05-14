import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IPollPreviewHeaderProps} from './IPollPreviewHeaderProps';
import ChanelProfileIcon from '~/components/chanelProfileIcon/ChanelProfileIcon';
import ActionIcon from '~/components/actionIcon/ActionIcon';
import {colors} from '~/constants/Colors';

const PollPreviewHeader = (props: IPollPreviewHeaderProps) => {
  return (
    <View style={styles.container}>
      <ChanelProfileIcon image={props.authorImage} onPress={props.goToAuthorChanel} />
      <View style={styles.flex}>
        <Text style={styles.author}>{props.author}</Text>
        <Text style={styles.date}>{props.publicationDate}</Text>
      </View>
      <Pressable onPress={() => {}} style={styles.subscribe}>
        <Text style={styles.subscribeLabel}>Suscribirse</Text>
      </Pressable>
      <ActionIcon onPress={() => {}} />
    </View>
  );
};

export default PollPreviewHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  flex: {
    flex: 1,
    justifyContent: 'space-between',
  },
  author: {
    fontWeight: 'bold',
    color: colors.font,
  },
  date: {
    color: 'gray',
  },
  subscribe: {
    backgroundColor: colors.cardBackground,
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
    alignSelf: 'center',
    marginHorizontal: 10,
  },
  subscribeLabel: {
    color: colors.font,
  },
});
