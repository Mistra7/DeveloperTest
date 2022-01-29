import React from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';

const DevelopText: React.FC<TextProps> = ({style, ...props}) => <Text {...props} style={[styles.text, style]} />;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Arial',
    fontSize: 15,
  },
});

export default DevelopText;
