import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import {typography, colors} from '../../Theme';

export default ({text, onPress, IconComponent, containerStyle, textStyle}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, {...containerStyle}]}>
      <Text style={[styles.text, {...textStyle}]}>{text}</Text>
      <View style={styles.iconContainer}>
        <IconComponent />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 48,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: colors.gray.dark,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    ...typography.heading5,
    fontFamily: 'AvenirLTProMedium',
  },
  iconContainer: {
    position: 'absolute',
    right: 20,
  },
});
