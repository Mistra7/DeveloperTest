import React from 'react';
import {Image, ImageProps, StyleSheet, TouchableOpacity} from 'react-native';

type BaseProps = Omit<ImageProps, 'source'>;

interface Props extends BaseProps {
  onPress: (image: string) => void;
  source: string;
}

const RocketImage: React.FC<Props> = ({style, onPress, source, ...props}) => {
  const onPressHandle = () => onPress(source);

  return (
    <TouchableOpacity onPress={onPressHandle}>
      <Image {...props} source={{uri: source}} style={[styles.image, style]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    borderRadius: 25,
    height: 50,
    width: 50,
    marginHorizontal: 7.5,
  },
});

export default RocketImage;
