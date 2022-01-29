import React, {useEffect} from 'react';
import {FlatList, ImageBackground, Linking} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getCrewMembers} from '../actions/CrewMembersActions';
import CrewRenderItem from '../components/crewRenderItem/Index';
import FlatListSeparator from '../components/FlatListSeparator';
import {screenStyles} from '../constants/styles/ScreenStyles';
import {CrewMember} from '../models/CrewMember';
import {RootState} from '../reducers/rootReducer';
import {CrewMembersScreenProps} from '../types/navigation/BottomTabNavigation';

const backgroundImage = require('../../assets/images/astronaut.png');

const CrewMembersScreen: React.FC<CrewMembersScreenProps> = () => {
  const crewMembers = useSelector((state: RootState) => state.crew.crewMembers);
  const dispatch = useDispatch();

  const onLinkPress = (link: string) => Linking.openURL(link);

  useEffect(() => {
    if (!crewMembers.length) {
      dispatch(getCrewMembers());
    }
  }, [crewMembers]);

  const renderItem = ({item}: {item: CrewMember}) => <CrewRenderItem item={item} onWikiLinkPress={onLinkPress} />;

  const keyExtractor = (item: CrewMember) => item.id;

  return (
    <ImageBackground source={backgroundImage} resizeMode="contain" style={screenStyles.container}>
      <FlatList
        data={crewMembers}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={screenStyles.flatListStyle}
        contentContainerStyle={screenStyles.flatListContainer}
        ItemSeparatorComponent={FlatListSeparator}
      />
    </ImageBackground>
  );
};

export default CrewMembersScreen;
