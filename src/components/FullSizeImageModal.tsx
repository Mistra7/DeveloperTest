import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Modal from 'react-native-modal';
import Icon from '../../assets/Icons/MyIcon';
import {Colors} from '../constants/styles/colors';

interface Props {
  image?: string;
  closeImage: () => void;
}

const FullSizeImageModal: React.FC<Props> = ({image, closeImage}) => {
  return (
    <Modal
      animationIn="fadeIn"
      animationOut="fadeOut"
      isVisible={image ? true : false}
      onBackdropPress={closeImage}
      backdropTransitionOutTiming={0}
      hideModalContentWhileAnimating>
      <View style={styles.container}>
        <Image source={{uri: image}} style={styles.image} />
        <Icon
          name="close-button-svgrepo-com"
          color={Colors.WHITE}
          style={styles.close}
          size={30}
          onPress={closeImage}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: '60%',
    alignSelf: 'center',
  },
  image: {
    flex: 1,
  },
  close: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
});

export default FullSizeImageModal;
