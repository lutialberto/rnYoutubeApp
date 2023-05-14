import {View} from 'react-native';
import React from 'react';
import {colors} from '~/constants/Colors';

const SectionSeparator = () => (
  <View
    style={{
      height: 10,
      backgroundColor: colors.cardBackground,
    }}
  />
);

export default SectionSeparator;
