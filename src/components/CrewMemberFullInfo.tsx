import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {screenStyles} from '../constants/styles/ScreenStyles';
import {CrewMember} from '../models/CrewMember';
import DevelopText from './DevelopText';
import WikiButton from './WikiButton';

interface Props {
  member: CrewMember;
  onSeeWikiPress: () => void;
}

const CrewMemberFullInfo: React.FC<Props> = ({member, onSeeWikiPress}) => {
  return (
    <View style={[screenStyles.container, styles.container]}>
      <Image source={{uri: member.image}} style={styles.image} />
      <DevelopText style={styles.text}>Agency: {member.agency}</DevelopText>
      <DevelopText style={styles.text}>Status: {member.status}</DevelopText>
      <DevelopText style={styles.text}>Number of launches: {member.launches.length}</DevelopText>
      <WikiButton onPress={onSeeWikiPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    padding: 10,
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 100,
    alignSelf: 'center',
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
  },
});

export default CrewMemberFullInfo;
