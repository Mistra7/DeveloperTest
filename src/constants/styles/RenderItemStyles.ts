import {StyleSheet} from 'react-native';
import {Colors} from './colors';

export const renderItemStyles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: Colors.DAINTREE,
    padding: 10,
    width: '100%',
  },
  title: {
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 5,
    color: Colors.WHITE,
  },
  description: {
    fontSize: 12,
    lineHeight: 20,
    color: Colors.WHITE,
  },
  underline: {
    textDecorationLine: 'underline',
  },
  flexRow: {
    flexDirection: 'row',
  },
});
