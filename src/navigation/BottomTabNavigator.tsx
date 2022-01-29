import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {bottomTabNavigatorConfig} from '../constants/navigation/configs';
import CrewMembersScreen from '../screens/CrewMembersScreen';
import RocketsScreen from '../screens/RocketsScreen';
import {BottomTabNavigatorParams} from '../types/navigation/BottomTabNavigation';
import {AppRoute} from './routes';

const BottomTab = createBottomTabNavigator<BottomTabNavigatorParams>();

const BottomTabNavigator: React.FC = () => {
  return (
    <BottomTab.Navigator screenOptions={bottomTabNavigatorConfig}>
      <BottomTab.Screen name={AppRoute.ROCKETS_SCREEN} component={RocketsScreen} />
      <BottomTab.Screen name={AppRoute.CREW_MEMBERS_SCREEN} component={CrewMembersScreen} />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
