import React, {useState, useEffect, useCallback, useRef} from 'react';
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
import NavBar from './componenets/NavBar';

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

  const scrollY = useRef(new Animated.Value(0)).current;

  const onScroll = Animated.event(
    [{nativeEvent: {contentOffset: {y: scrollY}}}],
    {useNativeDriver: true},
  );

  const translateY = Animated.diffClamp(scrollY, 0, 380).interpolate({
    inputRange: [0, 50],
    outputRange: [0, -50],
  });

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 200, 300],
    outputRange: [1, 0.2, 0],
  });
  const navBarOpacity = scrollY.interpolate({
    inputRange: [0, 200, 300],
    outputRange: [0, 0.4, 1],
  });

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
        <Animated.View
          style={{
            ...styles.animatedContainer,
            transform: [{translateY}],
            opacity: headerOpacity,
          }}>
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
        </Animated.View>
        <NavBar
          onMenuPress={toggleMenu}
          style={styles.navBar}
          opacity={navBarOpacity}
        />
        <ListView
          data={selectedCategory ? filteredCoupons : coupons.data}
          isLoading={coupons.isLoading}
          onScroll={onScroll}
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
  animatedContainer: {
    position: 'absolute',
    zIndex: 10,
  },
  navBar: {
    paddingTop: 40,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: colors.gray.dark,
  },
});

export default Feed;
