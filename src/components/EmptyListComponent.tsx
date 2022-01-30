import React, {useMemo} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../reducers/rootReducer';
import DevelopText from './DevelopText';
import Icon from '../../assets/Icons/MyIcon';
import {Colors} from '../constants/styles/colors';

interface Props {
  stateType: 'rockets' | 'crew';
  onTryAgainPress: () => void;
}

const EmptyListComponent: React.FC<Props> = ({stateType, onTryAgainPress}) => {
  const {loading, error, rejected} = useSelector((state: RootState) =>
    stateType === 'rockets' ? state.rockets : state.crew,
  );

  const content = useMemo(() => {
    if (loading) {
      return <ActivityIndicator size="large" color={Colors.DAINTREE} />;
    }

    if (rejected) {
      if (error?.response?.status === 500) {
        return <DevelopText>Server error!</DevelopText>;
      } else if (error?.message.includes('Network Error')) {
        return <DevelopText>No internet! Connect your device and try again!</DevelopText>;
      }
    }

    return <DevelopText>No items</DevelopText>;
  }, [loading, rejected, error]);

  return (
    <View style={styles.container}>
      {content}
      {!loading && (
        <DevelopText style={styles.tryAgainText} onPress={onTryAgainPress}>
          <Icon name="spinner11" color={Colors.BRIGHT_BLUE} size={18} /> Try again
        </DevelopText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tryAgainText: {
    marginVertical: 15,
    fontSize: 18,
    color: Colors.BRIGHT_BLUE,
    textDecorationLine: 'underline',
  },
});

export default EmptyListComponent;
