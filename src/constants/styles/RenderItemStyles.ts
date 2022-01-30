import {StyleSheet} from 'react-native';
import {ColorPallete} from './colorStyles';

export const renderItemStyles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: ColorPallete.theme,
    padding: 10,
    width: '100%',
  },
  title: {
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 5,
    color: ColorPallete.rocketText,
  },
  description: {
    fontSize: 12,
    lineHeight: 20,
    color: ColorPallete.rocketText,
  },
  underline: {
    textDecorationLine: 'underline',
  },
  flexRow: {
    flexDirection: 'row',
  },
});
