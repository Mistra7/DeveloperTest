import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {AppRoute} from '../../navigation/routes';

export type BottomTabNavigatorParams = {
  [AppRoute.CREW_MEMBERS_SCREEN]: undefined;
  [AppRoute.ROCKETS_SCREEN]: undefined;
};

export type CrewMembersScreenProps = BottomTabScreenProps<BottomTabNavigatorParams, AppRoute.CREW_MEMBERS_SCREEN>;

export type RocketsScreenProps = BottomTabScreenProps<BottomTabNavigatorParams, AppRoute.ROCKETS_SCREEN>;

export type ScreenOptionsProps = BottomTabScreenProps<
  BottomTabNavigatorParams,
  AppRoute.ROCKETS_SCREEN | AppRoute.CREW_MEMBERS_SCREEN
>;
