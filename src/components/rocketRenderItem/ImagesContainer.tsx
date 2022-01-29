import React, {memo} from 'react';
import {StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import RocketImage from './RocketImage';

interface Props {
  imageURLs: string[];
  onPress: (image: string) => void;
}

const ImagesContainer: React.FC<Props> = ({imageURLs, onPress}) => {
  return (
    <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={styles.container} horizontal>
      {imageURLs.map(image => (
        <RocketImage source={image} key={image} onPress={onPress} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    paddingVertical: 10,
  },
});

export default memo(ImagesContainer);
