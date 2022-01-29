import React, {memo} from 'react';
import {View} from 'react-native';
import {renderItemStyles} from '../../constants/styles/RenderItemStyles';
import {Rocket} from '../../models/Rocket';
import RocketImage from './RocketImage';
import RocketInformation from './RocketInformation';

interface Props {
  item: Rocket;
}

const placeholder = require('../../../assets/images/placeholder.jpeg');

const RocketRenderItem: React.FC<Props> = ({item}) => {
  const imageSource = item.flickr_images.length ? {uri: item.flickr_images[0]} : placeholder;

  return (
    <View style={renderItemStyles.container}>
      <RocketImage source={imageSource} />
      <RocketInformation rocket={item} />
    </View>
  );
};

export default memo(RocketRenderItem);
