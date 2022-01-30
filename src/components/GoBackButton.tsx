import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from '../../assets/Icons/MyIcon';
import {ColorPallete} from '../constants/styles/colorStyles';

interface Props {
  onPress?: () => void;
}

const GoBackButton: React.FC<Props> = ({onPress}) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <Icon name="chevron_left" color={ColorPallete.seeDetailsIcon} size={20} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: ColorPallete.theme,
    padding: 10,
    borderRadius: 30,
    marginLeft: 10,
  },
});

export default GoBackButton;
