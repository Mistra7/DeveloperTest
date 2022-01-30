import React, {useEffect, useMemo, useState} from 'react';
import {Linking} from 'react-native';
import {isAndroid} from '../../constants/constants';
import {PermissionsGranted} from '../../models/PermissionsGranted';
import ModalControl from './ModalControl';

interface Props {
  permissions?: PermissionsGranted;
}

const PermissionsModal: React.FC<Props> = ({permissions}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!permissions) {
      return;
    }

    if (!permissions.camera || !permissions.library || (!isAndroid && !permissions.appTracking)) {
      setIsVisible(true);
    }
  }, [permissions]);

  const modalPermissionsNeededText = useMemo(() => {
    let returnValue = '';

    if (!permissions) {
      return returnValue;
    }

    if (!permissions.camera) {
      returnValue += 'Camera Permission\n';
    }

    if (!permissions.library) {
      returnValue += 'Photo Library Permission\n';
    }

    if (!isAndroid && !permissions.appTracking) {
      returnValue += 'App Tracking Permissions\n';
    }

    return returnValue;
  }, [permissions]);

  const onCloseModalHandle = () => setIsVisible(false);

  const onLinkingHandle = () => Linking.openSettings();

  return (
    <ModalControl
      modalText={modalPermissionsNeededText}
      closeModal={onCloseModalHandle}
      isVisible={isVisible}
      onSettingsPress={onLinkingHandle}
    />
  );
};

export default PermissionsModal;
