import React from 'react';
import {Image, ImageProps, StyleSheet} from 'react-native';

const RocketImage: React.FC<ImageProps> = ({style, ...props}) => <Image {...props} style={[styles.image, style]} />;

const styles = StyleSheet.create({
  image: {
    borderRadius: 10,
    height: 150,
    width: 160,
    marginRight: 10,
  },
});

export default RocketImage;
