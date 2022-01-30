import React, {memo} from 'react';
import {View} from 'react-native';
import {renderItemStyles} from '../../constants/styles/RenderItemStyles';
import {Rocket} from '../../models/Rocket';
import DevelopText from '../DevelopText';
import ImagesContainer from './ImagesContainer';
import RocketInformation from './RocketInformation';

interface Props {
  item: Rocket;
  onImagePress: (image: string) => void;
}

const RocketRenderItem: React.FC<Props> = ({item, onImagePress}) => {
  return (
    <View style={renderItemStyles.container}>
      <DevelopText style={renderItemStyles.title}>{item.name}</DevelopText>
      <ImagesContainer imageURLs={item.flickr_images} onPress={onImagePress} />
      <RocketInformation rocket={item} />
    </View>
  );
};

export default memo(RocketRenderItem);
