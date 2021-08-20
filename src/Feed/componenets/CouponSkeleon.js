import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {colors} from '../../Theme';

const {width} = Dimensions.get('screen');

export default () => {
  return (
    <View style={styles.container}>
      <SkeletonPlaceholder
        speed={800}
        highlightColor={colors.white.default}
        backgroundColor={colors.gray.dark}>
        <View style={styles.image} />
        <View style={styles.title} />
        <View style={styles.discount} />
      </SkeletonPlaceholder>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.43,
    height: 200,
    marginRight: 15,
    marginBottom: 20,
  },
  image: {
    width: width * 0.43,
    height: 120,
  },
  title: {
    width: width * 0.43,
    height: 20,
    marginTop: 10,
  },
  discount: {
    width: width * 0.43,
    height: 20,
    marginTop: 10,
  },
});
