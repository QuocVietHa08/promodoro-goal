import { CardStyleInterpolators } from '@react-navigation/stack';
import { Platform } from 'react-native';
import RouteName from './RouteName';

const screenOptions = {
  headerShown: false,
  cardStyleInterpolator: Platform.select({
    android: CardStyleInterpolators.forFadeFromBottomAndroid,
    ios: CardStyleInterpolators.forScaleFromCenterAndroid,
  }),
  tabBarHideOnKeyboard: true,
  adaptive: true,
  keyboardHidesTabBar: true,
};

const BOTTOM_TAB_TITLE = {
  Home: 'Home',
  Task: 'Task',
  Statistics: 'Statistics',
  Profile: 'Profile',
};

const routesBottomBar = [
  RouteName.Home,
  RouteName.Task,
  RouteName.Statistics,
  RouteName.Profile,
];

export { screenOptions, BOTTOM_TAB_TITLE, routesBottomBar };
