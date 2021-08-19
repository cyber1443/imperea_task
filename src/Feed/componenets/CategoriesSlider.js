import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {strings} from '../../localization';
import {colors, typography} from '../../Theme';
import CategorySkeleton from './CategorySkeleton';

const skeletonData = [{}, {}, {}, {}, {}, {}];

export default ({data, isLoading}) => {
  const [sliderData, setSliderData] = useState([]);

  useEffect(() => {
    const newData = data.map(item => ({...item, isPressed: false}));
    setSliderData(newData);
  }, [data]);

  const Category = ({item}) => (
    <TouchableOpacity
      key={item.id.toString()}
      onPress={() => setItemPressed(item)}
      style={{
        ...styles.button,
        backgroundColor: item.isPressed
          ? colors.orange.default
          : colors.white.default,
      }}>
      <Text
        style={{
          ...styles.buttonText,
          color: item.isPressed ? colors.white.default : colors.gray.dark,
        }}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  const renderCategoies = () => {
    return isLoading
      ? skeletonData.map((_, index) => <CategorySkeleton index={index} />)
      : sliderData.map(item => <Category item={item} />);
  };

  const setItemPressed = item => {
    const newData = sliderData.map(i =>
      i.id === item.id ? {...i, isPressed: true} : {...i, isPressed: false},
    );
    setSliderData(newData);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headlineContainer}>
        <Text style={styles.headline1}>{strings.featured_categories} </Text>
        <Text style={styles.headline2}>{strings.see_all} </Text>
      </View>
      <ScrollView
        style={styles.sliderContainer}
        horizontal
        contentContainerStyle={styles.sliderContentContainer}
        showsHorizontalScrollIndicator={false}>
        {renderCategoies()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 10,
    marginBottom: 30,
  },
  headlineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  headline1: {
    ...typography.heading5,
  },
  headline2: {
    ...typography.heading5,
    color: colors.orange.default,
    textDecorationLine: 'underline',
  },
  sliderContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  sliderContentContainer: {
    paddingVertical: 5,
    paddingRight: 20,
    paddingLeft: 10,
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 16,
    elevation: 2,
    marginLeft: 10,
  },
  buttonText: {
    ...typography.heading5,
    color: colors.white.default,
  },
});
