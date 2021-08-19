import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {typography} from '../../Theme';

export default ({title, RightComponent, IconComponent}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.iconContainer}>
        <IconComponent />
      </View>
      <Text style={styles.title}>{title}</Text>
      {RightComponent ? (
        <View style={styles.rightComponentContainer}>
          <RightComponent />
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    ...typography.heading5,
    marginLeft: 40,
  },
  rightComponentContainer: {
    position: 'absolute',
    right: 0,
  },
  iconContainer: {
    position: 'absolute',
    left: 0,
  },
});
