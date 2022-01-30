import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {renderItemStyles} from '../../constants/styles/RenderItemStyles';
import {CrewMember} from '../../models/CrewMember';
import DevelopText from '../DevelopText';
import CrewImage from './CrewImage';
import Icon from '../../../assets/Icons/MyIcon';
import {ColorPallete} from '../../constants/styles/colorStyles';

interface Props {
  item: CrewMember;
  onPress: (id: CrewMember) => void;
}

const CrewRenderItem: React.FC<Props> = ({item, onPress}) => {
  const onPressHandle = () => onPress(item);

  return (
    <TouchableOpacity
      style={[renderItemStyles.container, renderItemStyles.flexRow]}
      activeOpacity={0.8}
      onPress={onPressHandle}>
      <CrewImage source={{uri: item.image}} />
      <View>
        <DevelopText style={renderItemStyles.title}>{item.name}</DevelopText>
        <DevelopText style={renderItemStyles.description}>Agency: {item.agency}</DevelopText>
        <DevelopText style={renderItemStyles.description}>Status: {item.status}</DevelopText>
      </View>
      <Icon name="right-chevron" color={ColorPallete.seeDetailsIcon} style={styles.icon} size={25} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    alignSelf: 'center',
    right: 25,
  },
});

export default CrewRenderItem;
