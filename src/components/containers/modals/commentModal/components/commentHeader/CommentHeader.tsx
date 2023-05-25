import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CloseIcon from '~/assets/icons/X.svg';
import FilterIcon from '~/assets/icons/Filter.svg';
import ArrowLeftIcon from '~/assets/icons/ArrowLeft.svg';
import {colors} from '~/constants/Colors';

interface ICommentHeaderProps {
  title: string;
  onclose: () => void;
  onFilterPress: () => void;
  numberOfComments: string;
  hideFilter?: boolean;
  onGoBack?: () => void;
}

const CommentHeader = (props: ICommentHeaderProps) => {
  return (
    <View style={styles.container}>
      {props.hideFilter && (
        <Pressable onPress={props.onGoBack}>
          <ArrowLeftIcon style={styles.icon} />
        </Pressable>
      )}
      <Text numberOfLines={1} style={styles.title}>
        {props.title}
      </Text>
      <Text style={styles.numberOfComments}>{props.numberOfComments}</Text>
      {!props.hideFilter && (
        <Pressable onPress={props.onFilterPress}>
          <FilterIcon style={styles.icon} />
        </Pressable>
      )}
      <Pressable onPress={props.onclose}>
        <CloseIcon style={styles.icon} />
      </Pressable>
    </View>
  );
};

export default CommentHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    paddingTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.font,
  },
  numberOfComments: {
    fontSize: 16,
    color: 'gray',
  },
  icon: {
    width: 20,
    height: 20,
    color: colors.font,
  },
});
