import React from 'react';
import {Animated, TouchableOpacity, Image, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {colors} from '../../Theme';

export default ({onMenuPress, style, opacity}) => {
  return (
    <Animated.View style={{...styles.header, ...style, opacity}}>
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
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    width: 150,
    height: 20,
  },
});
