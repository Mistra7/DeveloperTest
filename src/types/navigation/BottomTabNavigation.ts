import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {RouteProp} from '@react-navigation/core';
import {AppRoute} from '../../navigation/routes';

export type BottomTabNavigatorParams = {
  [AppRoute.CREW_MEMBERS_SCREEN]: undefined;
  [AppRoute.ROCKETS_SCREEN]: undefined;
};

export interface CrewMembersScreenProps {
  navigation: BottomTabScreenProps<BottomTabNavigatorParams, AppRoute.CREW_MEMBERS_SCREEN>;
  route: RouteProp<BottomTabNavigatorParams, AppRoute.CREW_MEMBERS_SCREEN>;
}

export interface RocketsScreenProps {
  navigation: BottomTabScreenProps<BottomTabNavigatorParams, AppRoute.ROCKETS_SCREEN>;
  route: RouteProp<BottomTabNavigatorParams, AppRoute.ROCKETS_SCREEN>;
}

export interface ScreenOptionsProps {
  navigation: BottomTabScreenProps<BottomTabNavigatorParams, AppRoute.ROCKETS_SCREEN | AppRoute.CREW_MEMBERS_SCREEN>;
  route: RouteProp<BottomTabNavigatorParams, AppRoute.ROCKETS_SCREEN | AppRoute.CREW_MEMBERS_SCREEN>;
}
