import {BottomTabNavigationOptions, createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {bottomTabNavigatorConfig} from '../constants/navigation/configs';
import CrewMembersScreen from '../screens/CrewMembersScreen';
import RocketsScreen from '../screens/RocketsScreen';
import {BottomTabNavigatorParams, ScreenOptionsProps} from '../types/navigation/BottomTabNavigation';
import {AppRoute} from './routes';
import Icon from '../../assets/Icons/MyIcon';
import {screenNameToIcon} from '../utils/navigationUtils';

const BottomTab = createBottomTabNavigator<BottomTabNavigatorParams>();

const screenOptions = (props: ScreenOptionsProps): BottomTabNavigationOptions => ({
  tabBarIcon: info => <Icon name={screenNameToIcon(props.route.name)} color={info.color} size={25} />,
});

const BottomTabNavigator: React.FC = () => {
  return (
    <BottomTab.Navigator screenOptions={bottomTabNavigatorConfig}>
      <BottomTab.Screen name={AppRoute.ROCKETS_SCREEN} component={RocketsScreen} options={screenOptions} />
      <BottomTab.Screen name={AppRoute.CREW_MEMBERS_SCREEN} component={CrewMembersScreen} options={screenOptions} />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
