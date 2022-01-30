import React, {useEffect, useRef, useState} from 'react';
import {FlatList, ImageBackground} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getCrewMembers} from '../actions/CrewMembersActions';
import CrewRenderItem from '../components/crewRenderItem/Index';
import EmptyListComponent from '../components/EmptyListComponent';
import FlatListSeparator from '../components/FlatListSeparator';
import PermissionsModal from '../components/permissionsModal/Index';
import {screenStyles} from '../constants/styles/ScreenStyles';
import {CrewMember} from '../models/CrewMember';
import {PermissionsGranted} from '../models/PermissionsGranted';
import {AppRoute} from '../navigation/routes';
import {RootState} from '../reducers/rootReducer';
import {CrewMembersScreenProps} from '../types/navigation/BottomTabNavigation';
import checkAllPermissions from '../utils/permissionsUtils';

const backgroundImage = require('../../assets/images/astronaut.png');

const CrewMembersScreen: React.FC<CrewMembersScreenProps> = navigator => {
  const crewMembers = useSelector((state: RootState) => state.crew.crewMembers);
  const pressedCrewMember = useRef<CrewMember>();
  const [permissionsGranted, setPermissionsGranted] = useState<PermissionsGranted>();
  const dispatch = useDispatch();

  const getCrewMembersHandle = () => dispatch(getCrewMembers());

  useEffect(() => {
    if (!crewMembers.length) {
      getCrewMembersHandle();
    }
  }, [crewMembers]);

  const handleNavigation = () => {
    const parent = navigator.navigation.getParent();

    if (parent && pressedCrewMember.current) {
      parent.navigate(AppRoute.CREW_MEMBER_SCREEN, {member: pressedCrewMember.current});
    }
  };

  const onCheckPermissionsCallback = (canContinue: boolean, permissions: PermissionsGranted) => {
    if (canContinue) {
      handleNavigation();
      return;
    }

    setPermissionsGranted(permissions);
  };

  const onPress = (member: CrewMember) => {
    pressedCrewMember.current = member;
    checkAllPermissions(onCheckPermissionsCallback);
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
        ListEmptyComponent={<EmptyListComponent stateType="crew" onTryAgainPress={getCrewMembersHandle} />}
      />
      <PermissionsModal permissions={permissionsGranted} />
    </ImageBackground>
  );
};

export default CrewMembersScreen;
