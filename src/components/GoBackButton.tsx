import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from '../../assets/Icons/MyIcon';
import {Colors} from '../constants/styles/colors';

interface Props {
  onPress?: () => void;
}

const GoBackButton: React.FC<Props> = ({onPress}) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <Icon name="chevron_left" color={Colors.WHITE} size={20} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.DAINTREE,
    padding: 10,
    borderRadius: 30,
    marginLeft: 10,
  },
});

export default GoBackButton;
