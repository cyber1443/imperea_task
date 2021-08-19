import React, {useState, useEffect, useCallback} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  Animated,
} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SideMenu from 'react-native-side-menu';
import Menu from './componenets/Menu';
import Header from './componenets/Header';
import {typography, colors} from '../Theme';
import CategoriesSlider from './componenets/CategoriesSlider';
import {getCateogies as getCategoriesRequest} from './lib/getCategories';
import {getCoupons as getCouponsRequest} from './lib/getCoupons';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import {setCategories, setCoupons} from './state/reducer';
import ListView from './componenets/ListView';
import {strings} from '../localization';
import Dropdown from './componenets/Dropdown';

const {width} = Dimensions.get('screen');

const Feed = () => {
  const dispatch = useDispatch();
  const {categories, coupons} = useSelector(state => state.feed, shallowEqual);
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredCoupons, setFilteredCoupons] = useState(coupons.data);

  useEffect(() => {
    if (!selectedCategory) {
      return;
    }

    const newData = coupons.data.filter(
      item => item.categoryId === selectedCategory.id,
    );
    setFilteredCoupons(newData);
  }, [coupons.data, selectedCategory]);

  const toggleMenu = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  const onMenuChange = isOpened => {
    setIsMenuOpened(isOpened);
  };

  const getCategories = useCallback(async () => {
    const {data} = await getCategoriesRequest();
    dispatch(setCategories(data.payload));
  }, [dispatch]);

  const getCoupons = useCallback(async () => {
    const {data} = await getCouponsRequest();
    dispatch(setCoupons(data.payload));
  }, [dispatch]);

  useEffect(() => {
    getCategories();
    getCoupons();
  }, [getCategories, getCoupons]);

  const SideMenuComponent = <Menu />;
  return (
    <SideMenu
      onChange={onMenuChange}
      isOpen={isMenuOpened}
      menu={SideMenuComponent}
      edgeHitWidth={100}
      openMenuOffset={width * 0.85}
      animationFunction={(prop, value) =>
        Animated.spring(prop, {
          toValue: value,
          friction: 20,
          useNativeDriver: true,
        })
      }
      bounceBackOnOverdraw={false}>
      <SafeAreaProvider style={styles.contentContainer}>
        <StatusBar
          backgroundColor="transparent"
          barStyle="light-content"
          translucent
        />
        <Header onMenuPress={toggleMenu} />
        <CategoriesSlider
          data={categories.data}
          isLoading={categories.isLoading}
        />
        <View style={styles.couponsHeader}>
          <Text style={styles.couponsTitle}>{strings.active_coupons}</Text>
          <Dropdown
            data={categories.data}
            defaultButtonText={strings.categories}
            setSelectedCategory={setSelectedCategory}
          />
        </View>
        <ListView
          data={selectedCategory ? filteredCoupons : coupons.data}
          isLoading={coupons.isLoading}
        />
      </SafeAreaProvider>
    </SideMenu>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: colors.white.default,
  },
  couponsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  couponsTitle: {
    ...typography.heading1,
    fontSize: 20,
  },
});

export default Feed;
