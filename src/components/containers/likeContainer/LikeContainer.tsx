import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import LikeIcon from '~/assets/icons/Like.svg';
import DislikeIcon from '~/assets/icons/Dislike.svg';
import {colors} from '~/constants/Colors';
import {LikeStatus} from '~/models/LikeStatus';

interface ILikeContainerProps {
  likes: string;
  status: LikeStatus;
  onLikePress: () => void;
  onDislikePress: () => void;
}

const LikeContainer = (props: ILikeContainerProps) => {
  const [liked, setLiked] = useState<LikeStatus>(props.status);

  const likeStyle = [styles.icon, liked === 'liked' && {color: colors.lightBlue}];
  const dislikeStyle = [styles.icon, liked === 'disliked' && {color: colors.lightBlue}];

  const handleLiked = () => {
    setLiked(liked == 'liked' ? 'notLiked' : 'liked');
    props.onLikePress();
  };

  const handleDisliked = () => {
    setLiked(liked == 'disliked' ? 'notLiked' : 'disliked');
    props.onDislikePress();
  };

  return (
    <View style={styles.row}>
      <Pressable onPress={handleLiked} style={styles.row}>
        <LikeIcon style={likeStyle} />
        <Text style={styles.text}>{props.likes}</Text>
      </Pressable>
      <Pressable onPress={handleDisliked} style={styles.dislike}>
        <DislikeIcon style={dislikeStyle} />
      </Pressable>
    </View>
  );
};

export default LikeContainer;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  icon: {
    width: 20,
    height: 20,
    color: colors.font,
    marginRight: 10,
  },
  text: {
    color: colors.font,
  },
  dislike: {
    marginLeft: 10,
    paddingLeft: 10,
  },
});
