import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IPollPreviewCommentsProps} from './IPollPreviewCommentsProps';
import ChanelProfileIcon from '~/components/chanelProfileIcon/ChanelProfileIcon';
import {colors} from '~/constants/Colors';

const PollPreviewComments = (props: IPollPreviewCommentsProps) => {
  return (
    <Pressable style={styles.container} onPress={props.onPress}>
      <Text style={styles.commentTitle}>Comentarios</Text>
      <View style={styles.row}>
        <ChanelProfileIcon image={props.profileImage} onPress={() => {}} size={30} />
        <Text style={styles.comment}>Agrega un comentario...</Text>
      </View>
    </Pressable>
  );
};

export default PollPreviewComments;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.cardBackground,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  commentTitle: {
    color: colors.font,
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  comment: {
    backgroundColor: 'gray',
    borderRadius: 20,
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 3,
  },
});
