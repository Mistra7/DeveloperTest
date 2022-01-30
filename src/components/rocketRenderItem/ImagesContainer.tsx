import React, {memo} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import RocketImage from './RocketImage';

interface Props {
  imageURLs: string[];
  onPress: (image: string) => void;
}

const ImagesContainer: React.FC<Props> = ({imageURLs, onPress}) => {
  const renderItem = ({item}: {item: string}) => <RocketImage source={item} onPress={onPress} />;

  const keyExtractor = (image: string) => image;

  return (
    <FlatList
      data={imageURLs}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
});

export default memo(ImagesContainer);
