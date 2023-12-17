import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import RouteName from '../RouteName';
import { Task, Home, TodayTask, Notification } from '../../screens';
import { Platform } from 'react-native';

const screenOptions = {
  headerShow: false,
  cardStyleInterpolator: Platform.select({
    android: CardStyleInterpolators.forFadeFromBottomAndroid,
    ios: CardStyleInterpolators.forScaleFromCenterAndroid,
  }),
};

const Stack = createStackNavigator();

const ApplicationNavigator = props => {
  return (
    <>
      <Stack.Screen
        name={RouteName.Home}
        options={screenOptions}
        component={Home}
      />
      <Stack.Screen
        name={RouteName.TodayTask}
        options={screenOptions}
        component={TodayTask}
      />
      <Stack.Screen
        name={RouteName.Task}
        options={screenOptions}
        component={Home}
      />
      <Stack.Screen
        name={RouteName.Notification}
        options={screenOptions}
        component={Notification}
      />
    </>
  );
};

export default ApplicationNavigator;
