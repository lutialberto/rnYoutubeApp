import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Tag from '~/components/tags/tag/Tag';
import CompassIcon from '~/assets/icons/Compass.svg';
import {colors} from '~/constants/Colors';
import {getTags} from '~/services/homeTabServices';
import {TagListResponse} from '~/services/models/TagListResponse';

const Tags = () => {
  const [active, setActive] = useState<number>(1);
  const [tags, setTags] = useState<
    {
      name: string;
      icon?: React.ReactNode;
    }[]
  >([]);

  useEffect(() => {
    getTags().then((res: TagListResponse) => {
      const mappedTags = res.tags.map(tag => ({name: tag.name}));
      setTags([{icon: <CompassIcon style={styles.icon} />, name: ''}, ...mappedTags]);
    });
  }, []);

  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
          {tags.map((tag, index) => (
            <Tag
              key={index}
              icon={tag.icon}
              name={tag.name}
              active={active === index}
              onPress={() => {
                if (active === index) return;
                setActive(index);
              }}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Tags;

const styles = StyleSheet.create({
  container: {
    gap: 5,
    flexDirection: 'row',
    marginVertical: 10,
  },
  icon: {
    width: 20,
    aspectRatio: 1,
    color: colors.font,
  },
});
