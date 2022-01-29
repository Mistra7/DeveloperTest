import React from 'react';
import {StyleSheet, View} from 'react-native';

const FlatListSeparator: React.FC = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
  separator: {
    width: '100%',
    height: 10,
  },
});

export default FlatListSeparator;
