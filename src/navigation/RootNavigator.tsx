import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {rootNavigatorConfig} from '../constants/navigation/configs';
import CrewMemberScreen from '../screens/CrewMemberScreen';
import {RootNavigatorParams} from '../types/navigation/RootNavigaton';
import BottomTabNavigator from './BottomTabNavigator';
import {AppRoute} from './routes';

const Stack = createStackNavigator<RootNavigatorParams>();

const RootNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={rootNavigatorConfig}>
      <Stack.Screen name={AppRoute.BOTTOM_TAB_NAV} component={BottomTabNavigator} />
      <Stack.Screen name={AppRoute.CREW_MEMBER_SCREEN} component={CrewMemberScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
