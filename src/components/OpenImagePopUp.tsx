import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet} from 'react-native';
import {Colors} from '../constants/styles/colors';
import DevelopText from './DevelopText';

interface Props {
  visible: boolean;
  callback: () => void;
}

const OpenImagePopUp: React.FC<Props> = ({visible, callback}) => {
  const opacityAnim = useRef(new Animated.Value(0));

  useEffect(() => {
    if (visible) {
      const fadeIn = Animated.timing(opacityAnim.current, {toValue: 1, duration: 500, useNativeDriver: true});
      const fadeOut = Animated.timing(opacityAnim.current, {
        toValue: 0,
        duration: 500,
        delay: 2500,
        useNativeDriver: true,
      });

      Animated.sequence([fadeIn, fadeOut]).start(callback);
    }
  });

  if (!visible) {
    return null;
  }

  return (
    <Animated.View style={[styles.container, {opacity: opacityAnim.current}]}>
      <DevelopText>To see full image, just press on it!</DevelopText>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 25,
    padding: 20,
    backgroundColor: Colors.WHITE,
    alignSelf: 'center',
    borderRadius: 40,
  },
});

export default OpenImagePopUp;
