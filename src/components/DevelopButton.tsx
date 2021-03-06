import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../constants/styles/colors';
import DevelopText from './DevelopText';

interface Props {
  label: string;
  onPress: () => void;
}

const DevelopButton: React.FC<Props> = ({label, onPress}) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <DevelopText style={styles.label}>{label}</DevelopText>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.DAINTREE,
    padding: 10,
    borderRadius: 20,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {color: Colors.WHITE},
});

export default DevelopButton;
