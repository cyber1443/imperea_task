import React, {useCallback} from 'react';
import {Animated, StyleSheet, View, Text} from 'react-native';
import CouponItem from './CouponItem';
import CouponSkeleon from './CouponSkeleon';
import LottieView from 'lottie-react-native';
import {typography} from '../../Theme';
import {strings} from '../../localization';

const skeletonData = [{}, {}, {}, {}, {}, {}];

export default ({data, isLoading, onScroll}) => {
  const keyExtractor = useCallback((_, index) => index.toString(), []);

  const renderItem = useCallback(
    ({item}) => {
      return isLoading ? <CouponSkeleon /> : <CouponItem item={item} />;
    },
    [isLoading],
  );

  const listEmptyComponent = () => (
    <View style={styles.animationContainer}>
      <LottieView
        source={require('../../assets/empty-box.json')}
        autoPlay
        loop
      />
      <Text style={styles.animationText}>{strings.no_data} </Text>
    </View>
  );

  const getAlignItems = () => {
    return {
      alignItems: data.length > 1 ? 'center' : 'flex-start',
    };
  };

  return (
    <Animated.FlatList
      keyExtractor={keyExtractor}
      data={isLoading ? skeletonData : data}
      renderItem={renderItem}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        ...styles.contentContainer,
        ...getAlignItems(),
      }}
      ListEmptyComponent={listEmptyComponent}
      onScroll={onScroll}
    />
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingLeft: 20,
    paddingTop: 300,
  },
  animationContainer: {
    height: 200,
    width: 200,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  animationText: {
    ...typography.heading5,
    textAlign: 'center',
    marginTop: 150,
  },
});
