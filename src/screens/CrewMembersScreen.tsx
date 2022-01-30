import React, {useEffect} from 'react';
import {FlatList, ImageBackground} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getCrewMembers} from '../actions/CrewMembersActions';
import CrewRenderItem from '../components/crewRenderItem/Index';
import EmptyListComponent from '../components/EmptyListComponent';
import FlatListSeparator from '../components/FlatListSeparator';
import {screenStyles} from '../constants/styles/ScreenStyles';
import {CrewMember} from '../models/CrewMember';
import {AppRoute} from '../navigation/routes';
import {RootState} from '../reducers/rootReducer';
import {CrewMembersScreenProps} from '../types/navigation/BottomTabNavigation';

const backgroundImage = require('../../assets/images/astronaut.png');

const CrewMembersScreen: React.FC<CrewMembersScreenProps> = navigator => {
  const crewMembers = useSelector((state: RootState) => state.crew.crewMembers);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!crewMembers.length) {
      dispatch(getCrewMembers());
    }
  }, [crewMembers]);

  const onPress = (member: CrewMember) => {
    const parent = navigator.navigation.getParent();

    if (parent) {
      parent.navigate(AppRoute.CREW_MEMBER_SCREEN, {member});
    }
  };

  const renderItem = ({item}: {item: CrewMember}) => <CrewRenderItem item={item} onPress={onPress} />;

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
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<EmptyListComponent stateType="crew" />}
      />
    </ImageBackground>
  );
};

export default CrewMembersScreen;
