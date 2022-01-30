import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {crewMemberScreenConfig, tabNavigatorConfig} from '../constants/navigation/configs';
import CrewMemberScreen from '../screens/CrewMemberScreen';
import {RootNavigatorParams} from '../types/navigation/RootNavigaton';
import BottomTabNavigator from './BottomTabNavigator';
import {AppRoute} from './routes';

const Stack = createStackNavigator<RootNavigatorParams>();

const RootNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={AppRoute.BOTTOM_TAB_NAV} component={BottomTabNavigator} options={tabNavigatorConfig} />
      <Stack.Screen name={AppRoute.CREW_MEMBER_SCREEN} component={CrewMemberScreen} options={crewMemberScreenConfig} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
