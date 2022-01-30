import {check, request, PERMISSIONS} from 'react-native-permissions';
import {isAndroid} from '../constants/constants';
import {PermissionsGranted} from '../models/PermissionsGranted';

const checkAllPermisionsIOS = async (callback: (passed: boolean, permissions: PermissionsGranted) => void) => {
  let hasCameraPermission = (await check(PERMISSIONS.IOS.CAMERA)) === 'granted';
  let hasLibraryPermission = (await check(PERMISSIONS.IOS.PHOTO_LIBRARY)) === 'granted';
  let hasAppTrackingPermission = (await check(PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY)) === 'granted';

  if (!hasCameraPermission) {
    hasCameraPermission = (await request(PERMISSIONS.IOS.CAMERA)) === 'granted';
  }

  if (!hasLibraryPermission) {
    hasLibraryPermission = (await request(PERMISSIONS.IOS.PHOTO_LIBRARY)) === 'granted';
  }

  if (!hasAppTrackingPermission) {
    hasAppTrackingPermission = (await request(PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY)) === 'granted';
  }

  const hasAllPermissions = hasAppTrackingPermission && hasLibraryPermission && hasCameraPermission;

  const permissions: PermissionsGranted = {
    camera: hasCameraPermission,
    library: hasLibraryPermission,
    appTracking: hasAppTrackingPermission,
  };

  callback(hasAllPermissions, permissions);
};

const checkAllPermisionsAndroid = async (callback: (passed: boolean, permissions: PermissionsGranted) => void) => {
  let hasCameraPermission = (await check(PERMISSIONS.ANDROID.CAMERA)) === 'granted';
  let hasLibraryPermission = (await check(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE)) === 'granted';

  const hasAllPermissions = hasLibraryPermission && hasCameraPermission;

  if (!hasCameraPermission) {
    hasCameraPermission = (await request(PERMISSIONS.ANDROID.CAMERA)) === 'granted';
  }

  if (!hasLibraryPermission) {
    hasLibraryPermission = (await request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE)) === 'granted';
  }

  const permissions: PermissionsGranted = {
    camera: hasCameraPermission,
    library: hasLibraryPermission,
  };

  callback(hasAllPermissions, permissions);
};

const checkAllPermissions = isAndroid ? checkAllPermisionsAndroid : checkAllPermisionsIOS;

export default checkAllPermissions;
