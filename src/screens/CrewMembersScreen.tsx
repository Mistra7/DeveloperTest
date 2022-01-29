import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getCrewMembers} from '../actions/CrewMembersActions';
import {RootState} from '../reducers/rootReducer';
import {CrewMembersScreenProps} from '../types/navigation/BottomTabNavigation';

const CrewMembersScreen: React.FC<CrewMembersScreenProps> = () => {
  const crewMembers = useSelector((state: RootState) => state.crew.crewMembers);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!crewMembers.length) {
      dispatch(getCrewMembers());
    }
  }, [crewMembers]);

  return <View />;
};

export default CrewMembersScreen;
