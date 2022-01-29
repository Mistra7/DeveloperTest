import React, {useEffect} from 'react';
import {FlatList, ImageBackground} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getRockets} from '../actions/RocketActions';
import FlatListSeparator from '../components/FlatListSeparator';
import RocketRenderItem from '../components/rocketRenderItem/Index';
import {screenStyles} from '../constants/styles/ScreenStyles';
import {Rocket} from '../models/Rocket';
import {RootState} from '../reducers/rootReducer';
import {RocketsScreenProps} from '../types/navigation/BottomTabNavigation';

const backgroundImage = require('../../assets/images/rocket.png');

const RocketsScreen: React.FC<RocketsScreenProps> = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state: RootState) => state.rockets.rockets);

  useEffect(() => {
    if (!rockets.length) {
      dispatch(getRockets());
    }
  }, [rockets]);

  const renderItem = ({item}: {item: Rocket}) => <RocketRenderItem item={item} />;

  const keyExtractor = (item: Rocket) => item.id;

  return (
    <ImageBackground source={backgroundImage} resizeMode="contain" style={screenStyles.container}>
      <FlatList
        data={rockets}
        renderItem={renderItem}
        ItemSeparatorComponent={FlatListSeparator}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        style={screenStyles.flatListStyle}
        contentContainerStyle={screenStyles.flatListContainer}
      />
    </ImageBackground>
  );
};

export default RocketsScreen;
