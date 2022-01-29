import {StyleSheet} from 'react-native';
import {ColorPallete} from './colorStyles';

export const screenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorPallete.screenBackground,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  flatListStyle: {
    paddingVertical: 10,
  },
  flatListContainer: {
    paddingBottom: 20,
  },
  imageBackground: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
