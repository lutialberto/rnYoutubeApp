import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import ChanelProfileIcon from '~/components/chanelProfileIcon/ChanelProfileIcon';
import {useProfileState} from '~/hooks/useProfileState';

const CommentForm = () => {
  const {profileImageUrl} = useProfileState();
  return (
    <View style={styles.row}>
      <ChanelProfileIcon image={profileImageUrl} onPress={() => {}} size={30} />
      <TextInput
        style={styles.comment}
        placeholder="Agrega un comentario..."
        placeholderTextColor="gray"
      />
    </View>
  );
};

export default CommentForm;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderTopWidth: 0.7,
    borderBottomWidth: 0.7,
    borderColor: 'gray',
  },
  comment: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 3,
  },
});
