import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import {StackNavigationOptions} from '@react-navigation/stack';
import {ColorPallete} from '../styles/colorStyles';

export const bottomTabNavigatorConfig: BottomTabNavigationOptions = {
  headerShown: true,
  headerTitleAlign: 'center',
  headerTitleStyle: {
    fontWeight: 'bold',
    color: ColorPallete.headerTextColor,
    fontSize: 25,
  },
  headerStyle: {
    backgroundColor: ColorPallete.headerBackgroundColor,
  },
  tabBarStyle: {
    backgroundColor: ColorPallete.theme,
  },
  tabBarActiveTintColor: ColorPallete.tabBarIconColor,
};

export const tabNavigatorConfig: StackNavigationOptions = {
  headerShown: false,
};

export const crewMemberScreenConfig: StackNavigationOptions = {
  headerTitleAlign: 'center',
  headerTitleStyle: {
    fontWeight: 'bold',
    color: ColorPallete.headerTextColor,
    fontSize: 20,
  },
};
