import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import {StackNavigationOptions} from '@react-navigation/stack';

export const bottomTabNavigatorConfig: BottomTabNavigationOptions = {
  headerShown: true,
  headerTitleAlign: 'center',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

export const rootNavigatorConfig: StackNavigationOptions = {
  headerShown: false,
};
