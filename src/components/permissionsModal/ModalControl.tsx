import React from 'react';
import {StyleSheet, View} from 'react-native';
import Modal from 'react-native-modal';
import {Colors} from '../../constants/styles/colors';
import DevelopButton from '../DevelopButton';
import DevelopText from '../DevelopText';

interface Props {
  modalText?: string;
  closeModal: () => void;
  isVisible: boolean;
  onSettingsPress: () => void;
}

const ModalControl: React.FC<Props> = ({modalText, closeModal, isVisible, onSettingsPress}) => (
  <Modal
    isVisible={isVisible}
    animationIn="fadeIn"
    animationOut="fadeOut"
    backdropTransitionOutTiming={0}
    onBackdropPress={closeModal}
    hideModalContentWhileAnimating>
    <View style={styles.container}>
      <DevelopText style={styles.title}>Permissions Error!</DevelopText>
      <DevelopText style={styles.subText}>
        In order to access Crew Member's details screen, you have to provide following permissions to the app: {'\n\n'}
        <DevelopText style={styles.permissions}>{modalText}</DevelopText>
        {'\n'}
        <DevelopText>
          To grant these permissions please visit your{' '}
          <DevelopText style={styles.linkableText} onPress={onSettingsPress}>
            device settings
          </DevelopText>
          .
        </DevelopText>
      </DevelopText>
      <DevelopButton onPress={closeModal} label="Close" />
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  container: {
    width: '90%',
    padding: 20,
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
    alignSelf: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  subText: {
    marginBottom: 10,
  },
  permissions: {
    fontWeight: 'bold',
  },
  linkableText: {
    color: Colors.BRIGHT_BLUE,
  },
});

export default ModalControl;
