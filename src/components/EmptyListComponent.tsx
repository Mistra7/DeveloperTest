import React, {useMemo} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {ColorPallete} from '../constants/styles/colorStyles';
import {RootState} from '../reducers/rootReducer';
import DevelopText from './DevelopText';

interface Props {
  stateType: 'rockets' | 'crew';
}

const EmptyListComponent: React.FC<Props> = ({stateType}) => {
  const {loading} = useSelector((state: RootState) => (stateType === 'rockets' ? state.rockets : state.crew));

  const content = useMemo(() => {
    if (loading) {
      return <ActivityIndicator size="large" color={ColorPallete.theme} />;
    }

    return <DevelopText>No items</DevelopText>;
  }, [loading]);

  return <View style={styles.container}>{content}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default EmptyListComponent;
