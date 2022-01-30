import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import {StackNavigationOptions} from '@react-navigation/stack';
import {Colors} from '../styles/colors';

export const bottomTabNavigatorConfig: BottomTabNavigationOptions = {
  headerShown: true,
  headerTitleAlign: 'center',
  headerTitleStyle: {
    fontWeight: 'bold',
    color: Colors.BLACK,
    fontSize: 25,
  },
  headerStyle: {
    backgroundColor: Colors.WHITE,
  },
  tabBarStyle: {
    backgroundColor: Colors.DAINTREE,
  },
  tabBarActiveTintColor: Colors.MELON_YELLOW,
};

export const tabNavigatorConfig: StackNavigationOptions = {
  headerShown: false,
};

export const crewMemberScreenConfig: StackNavigationOptions = {
  headerTitleAlign: 'center',
  headerTitleStyle: {
    fontWeight: 'bold',
    color: Colors.BLACK,
    fontSize: 20,
  },
};
