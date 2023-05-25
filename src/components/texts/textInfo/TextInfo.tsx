import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface ITextInfoProps {
  info: string[];
  charSeparator?: string;
}

const TextInfo = (props: ITextInfoProps) => {
  const info = props.info.join(props.charSeparator || ' · ');
  return <Text style={styles.info}>{info}</Text>;
};

export default TextInfo;

const styles = StyleSheet.create({
  info: {
    fontSize: 12,
    color: 'gray',
  },
});
