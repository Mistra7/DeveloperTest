import React from 'react';
import {StyleSheet, View} from 'react-native';
import {renderItemStyles} from '../../constants/styles/RenderItemStyles';
import {Rocket} from '../../models/Rocket';
import DevelopText from '../DevelopText';

interface Props {
  rocket: Rocket;
}

const RocketInformation: React.FC<Props> = ({rocket}) => {
  return (
    <View style={styles.container}>
      <DevelopText style={renderItemStyles.title}>{rocket.name}</DevelopText>
      <DevelopText style={renderItemStyles.description}>Diameter: {rocket.diameter.meters}m</DevelopText>
      <DevelopText style={renderItemStyles.description}>Weight: {rocket.mass.kg}kg</DevelopText>
      <DevelopText style={renderItemStyles.description}>
        Is rocket still operating: {rocket.active ? 'yes' : 'no'}
      </DevelopText>
      <DevelopText style={renderItemStyles.description}>Cost per launch: {rocket.cost_per_launch}$</DevelopText>
      <DevelopText style={renderItemStyles.description}>First flight: {rocket.first_flight}</DevelopText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default RocketInformation;
