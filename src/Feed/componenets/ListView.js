import React, {useCallback} from 'react';
import {FlatList, StyleSheet, View, Text} from 'react-native';
import CouponItem from './CouponItem';
import CouponSkeleon from './CouponSkeleon';
import LottieView from 'lottie-react-native';
import {typography} from '../../Theme';
import {strings} from '../../localization';

const skeletonData = [{}, {}, {}, {}, {}, {}];

export default ({data, isLoading}) => {
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

  return (
    <FlatList
      keyExtractor={keyExtractor}
      data={isLoading ? skeletonData : data}
      renderItem={renderItem}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}
      ListEmptyComponent={listEmptyComponent}
    />
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    alignItems: 'center',
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
