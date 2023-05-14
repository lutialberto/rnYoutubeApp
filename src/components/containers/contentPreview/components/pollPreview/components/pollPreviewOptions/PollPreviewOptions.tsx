import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {IPollPreviewOptionsProps} from './IPollPreviewOptionsProps';
import {colors} from '~/constants/Colors';

const PollPreviewOptions = (props: IPollPreviewOptionsProps) => {
  const [selected, setSelected] = useState<number | undefined>();
  return (
    <View style={styles.container}>
      {props.options.map((option, index) => (
        <Pressable
          key={option.id}
          onPress={() => setSelected(index)}
          style={[styles.textContainer, selected === index && styles.textContainerSelected]}>
          <Image source={{uri: option.image}} style={{height: 80, aspectRatio: 1}} />
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
            }}>
            <View
              style={[
                styles.bar,
                {width: `${option.votes}%`},
                selected === index && {backgroundColor: colors.lightBlue},
              ]}
            />
            <Text style={[styles.text, selected === index && {color: colors.lightBlue}]}>
              {option.name}
            </Text>
            {selected !== undefined && (
              <Text style={[styles.textVotes, selected === index && {color: colors.lightBlue}]}>
                {option.votes} %
              </Text>
            )}
          </View>
        </Pressable>
      ))}
    </View>
  );
};

export default PollPreviewOptions;

const styles = StyleSheet.create({
  container: {
    gap: 5,
    marginVertical: 10,
  },
  bar: {
    backgroundColor: 'gray',
    opacity: 0.3,
    position: 'absolute',
    height: '100%',
  },
  text: {
    color: 'gray',
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    paddingVertical: 25,
    paddingLeft: 5,
  },
  textContainer: {
    flexDirection: 'row',
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 5,
  },
  textContainerSelected: {
    borderColor: colors.lightBlue,
  },
  textVotes: {
    color: 'gray',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right',
    textAlignVertical: 'center',
    paddingRight: 5,
  },
});
