import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../constants/styles/colors';
import DevelopText from './DevelopText';

interface Props {
  onPress: () => void;
}

const WikiButton: React.FC<Props> = ({onPress}) => (
  <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.8}>
    <DevelopText style={styles.text}>See wiki page</DevelopText>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    margin: 25,
    padding: 30,
    backgroundColor: Colors.BRIGHT_BLUE,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 50,
    width: '75%',
  },
  text: {
    fontSize: 20,
    color: Colors.WHITE,
    fontWeight: 'bold',
  },
});

export default WikiButton;
