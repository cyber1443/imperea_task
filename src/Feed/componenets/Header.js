import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {colors, typography} from '../../Theme';
import {strings} from '../../localization';
import NavBar from './NavBar';

const {width} = Dimensions.get('screen');

export default ({onMenuPress}) => {
  return (
    <ImageBackground
      style={styles.container}
      source={require('../../assets/headerBg.png')}>
      <NavBar onMenuPress={onMenuPress} />
      <Text style={styles.headline1}>{strings.welcome}</Text>
      <View style={styles.discountContainer}>
        <View style={styles.devider} />
        <Text style={styles.headline2}>{strings.discount_title} </Text>
      </View>
      <View style={styles.pointsContainer}>
        <Text style={styles.pointsNumberText}>180</Text>
        <Text style={styles.totalText}>{strings.total} </Text>
        <Text style={styles.totalText}>{strings.points} </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 220,
    width: width,
    padding: 20,
    paddingTop: 40,
  },
  headline1: {
    ...typography.heading2,
    color: colors.white.default,
    marginTop: 50,
  },
  headline2: {
    ...typography.heading4,
    color: colors.white.default,
  },
  discountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  devider: {
    height: 25,
    width: 3,
    backgroundColor: colors.orange.default,
    marginRight: 5,
  },
  pointsContainer: {
    width: 80,
    backgroundColor: colors.orange.default,
    borderRadius: 3,
    position: 'absolute',
    bottom: 20,
    right: 20,
    padding: 12,
    justifyContent: 'center',
  },
  pointsNumberText: {
    color: colors.white.default,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  totalText: {
    ...typography.heading6,
    color: colors.white.default,
    textAlign: 'center',
    marginBottom: 5,
    paddingLeft: 3,
  },
});
