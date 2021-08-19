import React from 'react';
import {View, StyleSheet} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {colors} from '../../Theme';

export default ({index}) => {
  return (
    <SkeletonPlaceholder
      speed={800}
      highlightColor={colors.white.default}
      backgroundColor={colors.gray.dark}>
      <View style={styles.mainContainer}>
        <View style={styles.container1} />
        <View style={styles.container2} />
      </View>
    </SkeletonPlaceholder>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container1: {
    height: 30,
    width: 80,
    borderRadius: 16,
    marginLeft: 10,
  },
  container2: {
    height: 30,
    width: 120,
    borderRadius: 16,
    marginLeft: 10,
  },
});
