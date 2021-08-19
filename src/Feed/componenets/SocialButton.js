import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import {colors, typography} from '../../Theme';

export default ({IconComponent, title}) => {
  return (
    <TouchableOpacity style={styles.container}>
      {IconComponent ? (
        <View style={styles.iconContainer}>
          <IconComponent />
        </View>
      ) : null}
      <Text style={styles.text}>{title} </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 45,
    width: 120,
    backgroundColor: colors.white.default,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 1,
    marginRight: 10,
    marginBottom: 10,
  },
  iconContainer: {
    position: 'absolute',
    left: 10,
  },
  text: {
    ...typography.heading5,
    marginLeft: 25,
  },
});
