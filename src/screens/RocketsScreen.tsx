import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getRockets} from '../actions/RocketActions';
import {RootState} from '../reducers/rootReducer';
import {RocketsScreenProps} from '../types/navigation/BottomTabNavigation';

const RocketsScreen: React.FC<RocketsScreenProps> = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state: RootState) => state.rockets.rockets);

  useEffect(() => {
    if (!rockets.length) {
      dispatch(getRockets());
    }
  }, [rockets]);

  return <View />;
};

export default RocketsScreen;
