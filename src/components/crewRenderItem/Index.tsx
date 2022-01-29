import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {renderItemStyles} from '../../constants/styles/RenderItemStyles';
import {CrewMember} from '../../models/CrewMember';
import DevelopText from '../DevelopText';
import CrewImage from './CrewImage';

interface Props {
  item: CrewMember;
  onWikiLinkPress: (link: string) => void;
}

const CrewRenderItem: React.FC<Props> = ({item, onWikiLinkPress}) => {
  const onLinkPress = () => onWikiLinkPress(item.wikipedia);

  return (
    <TouchableOpacity style={[renderItemStyles.container, renderItemStyles.flexRow]} activeOpacity={0.8}>
      <CrewImage source={{uri: item.image}} />
      <View style={{flex: 1}}>
        <DevelopText style={renderItemStyles.title}>{item.name}</DevelopText>
        <DevelopText style={renderItemStyles.description}>Agency: {item.agency}</DevelopText>
        <DevelopText style={renderItemStyles.description}>Status: {item.status}</DevelopText>
        <DevelopText style={[renderItemStyles.description, renderItemStyles.underline]} onPress={onLinkPress}>
          Wiki: {item.wikipedia}
        </DevelopText>
      </View>
    </TouchableOpacity>
  );
};

export default CrewRenderItem;
