import React from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';
import {Colors} from '../constants/styles/colors';

const DevelopText: React.FC<TextProps> = ({style, ...props}) => <Text {...props} style={[styles.text, style]} />;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Arial',
    fontSize: 15,
    color: Colors.BLACK,
  },
});

export default DevelopText;
