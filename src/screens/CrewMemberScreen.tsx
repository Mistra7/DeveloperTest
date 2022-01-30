import React from 'react';
import {View} from 'react-native';
import {screenStyles} from '../constants/styles/ScreenStyles';
import {CrewMemberScreenProps} from '../types/navigation/RootNavigaton';

const CrewMemberScreen: React.FC<CrewMemberScreenProps> = () => {
  return <View style={screenStyles.container} />;
};

export default CrewMemberScreen;
