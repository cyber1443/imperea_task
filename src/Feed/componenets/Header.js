import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {colors, typography} from '../../Theme';
import {strings} from '../../localization';

export default ({onMenuPress}) => {
  return (
    <ImageBackground
      style={styles.container}
      source={require('../../assets/headerBg.png')}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onMenuPress}>
          <Feather name="menu" size={25} color={colors.white.default} />
        </TouchableOpacity>
        <Image
          style={styles.logo}
          resizeMode="contain"
          source={require('../../assets/logo_white.png')}
        />
        <TouchableOpacity>
          <FontAwesome name="qrcode" size={25} color={colors.white.default} />
        </TouchableOpacity>
      </View>
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
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  logo: {
    width: 150,
    height: 20,
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
