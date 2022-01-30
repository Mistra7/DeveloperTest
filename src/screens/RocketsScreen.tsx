import React, {useEffect, useRef, useState} from 'react';
import {FlatList, ImageBackground} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getRockets} from '../actions/RocketActions';
import EmptyListComponent from '../components/EmptyListComponent';
import FlatListSeparator from '../components/FlatListSeparator';
import FullSizeImageModal from '../components/FullSizeImageModal';
import OpenImagePopUp from '../components/OpenImagePopUp';
import RocketRenderItem from '../components/rocketRenderItem/Index';
import {screenStyles} from '../constants/styles/ScreenStyles';
import {Rocket} from '../models/Rocket';
import {RootState} from '../reducers/rootReducer';
import {RocketsScreenProps} from '../types/navigation/BottomTabNavigation';

const backgroundImage = require('../../assets/images/rocket.png');

const RocketsScreen: React.FC<RocketsScreenProps> = () => {
  const dispatch = useDispatch();
  const {rockets, howToShowFullImagePopUpShowed} = useSelector((state: RootState) => state.rockets);
  const [popUpVisible, setPopUpVisible] = useState(false);
  const [fullImageSize, setFullImageSize] = useState<string>();

  useEffect(() => {
    if (!rockets.length) {
      dispatch(getRockets());
    }

    if (!howToShowFullImagePopUpShowed) {
      setPopUpVisible(true);
    }
  }, [rockets, howToShowFullImagePopUpShowed]);

  const {current: onImagePress} = useRef((image: string) => setFullImageSize(image));

  const {current: renderItem} = useRef(({item}: {item: Rocket}) => (
    <RocketRenderItem item={item} onImagePress={onImagePress} />
  ));

  const {current: keyExtractor} = useRef((item: Rocket) => item.id);

  const {current: popUpCallback} = useRef(() => setPopUpVisible(false));

  const {current: closeImage} = useRef(() => setFullImageSize(undefined));

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
        ListEmptyComponent={<EmptyListComponent stateType="rockets" />}
      />
      <OpenImagePopUp visible={popUpVisible} callback={popUpCallback} />
      <FullSizeImageModal image={fullImageSize} closeImage={closeImage} />
    </ImageBackground>
  );
};

export default RocketsScreen;
