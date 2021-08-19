import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  Dimensions,
} from 'react-native';
import {colors, typography} from '../../Theme';

const {width} = Dimensions.get('screen');

export default ({item}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: item?.imageUrl}}
          resizeMode="cover"
          style={styles.image}
        />
        <Text style={styles.pointsText}>10 bodova</Text>
        <Text style={styles.discountText}>-32%</Text>
      </View>
      <Text numberOfLines={2} style={styles.title}>
        {item?.name}
      </Text>
      <View style={styles.priceContainer}>
        <Text style={styles.oldPrice}>{`${item?.oldPrice.toFixed(2)} KM`}</Text>
        <Text style={styles.newPrice}>{`${item?.newPrice.toFixed(2)} KM`}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.43,
    height: 200,
    margin: 10,
  },
  imageContainer: {
    width: '100%',
    height: '60%',
  },
  image: {
    flex: 1,
  },
  title: {
    ...typography.heading5,
    marginTop: 10,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  oldPrice: {
    ...typography.heading6,
    textDecorationLine: 'line-through',
    marginRight: 10,
  },
  newPrice: {
    ...typography.heading2,
    fontSize: 16,
    lineHeight: 18,
  },
  pointsText: {
    ...typography.heading6,
    position: 'absolute',
    left: 2,
    top: 2,
    backgroundColor: colors.white.default,
    borderRadius: 10,
    padding: 5,
  },
  discountText: {
    ...typography.heading2,
    lineHeight: 20,
    paddingHorizontal: 5,
    fontSize: 10,
    position: 'absolute',
    bottom: 2,
    left: 2,
    backgroundColor: colors.red.light,
    color: colors.white.default,
  },
});
