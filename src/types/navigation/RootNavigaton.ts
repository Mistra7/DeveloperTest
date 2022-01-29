import {RouteProp} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import {AppRoute} from '../../navigation/routes';

export type RootNavigatorParams = {
  [AppRoute.BOTTOM_TAB_NAV]: undefined;
  [AppRoute.CREW_MEMBER_SCREEN]: undefined;
};

export interface CrewMemberScreenProps {
  navigation: StackNavigationProp<RootNavigatorParams, AppRoute.CREW_MEMBER_SCREEN>;
  route: RouteProp<RootNavigatorParams, AppRoute.CREW_MEMBER_SCREEN>;
}
