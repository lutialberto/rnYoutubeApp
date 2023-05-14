import {StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
import React from 'react';
import YoutubeIcon from '~/assets/icons/Youtube.svg';
import ChromecastIcon from '~/assets/icons/Chromecast.svg';
import NotificationIcon from '~/assets/icons/Notification.svg';
import SearchIcon from '~/assets/icons/Search.svg';
import ProfileIcon from '~/assets/icons/Profile.svg';
import {colors} from '~/constants/Colors';

const Header = () => {
  const actions = [
    {
      icon: (style: StyleProp<TextStyle>) => <ChromecastIcon style={style} />,
      onPress: () => console.log('search'),
    },
    {
      icon: (style: StyleProp<TextStyle>) => <NotificationIcon style={style} />,
      onPress: () => console.log('search'),
    },
    {
      icon: (style: StyleProp<TextStyle>) => <SearchIcon style={style} />,
      onPress: () => console.log('search'),
    },
    {
      icon: (style: StyleProp<TextStyle>) => <ProfileIcon style={style} />,
      onPress: () => console.log('search'),
    },
  ];
  return (
    <View style={{flexDirection: 'row', marginVertical: 20, alignItems: 'center'}}>
      <YoutubeIcon style={[styles.icon, {color: 'red'}]} />
      <Text style={{flex: 1, color: colors.font}}>Premium</Text>
      <View style={{flexDirection: 'row'}}>
        {actions.map((action, index) => (
          <View key={index}>{action.icon(styles.icon)}</View>
        ))}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  icon: {
    color: colors.font,
    width: 30,
    aspectRatio: 1,
    marginHorizontal: 5,
    paddingHorizontal: 5,
  },
});
