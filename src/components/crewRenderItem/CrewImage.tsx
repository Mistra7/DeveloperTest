import React from 'react';
import {Image, ImageProps, StyleSheet} from 'react-native';

const CrewImage: React.FC<ImageProps> = ({style, ...props}) => <Image {...props} style={[styles.image, style]} />;

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginRight: 10,
  },
});

export default CrewImage;
