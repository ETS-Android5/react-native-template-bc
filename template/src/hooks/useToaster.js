import React, { useState, useContext } from 'react';
import AuthContext from '../authContext';

const DEFAULT_CONFIG = {
  visible: false,
  message: '',
  preset: '', // success, failure, general, offline
  position: 'top',
  autoDismiss: 5000,
  showLoader: false,
  onDismiss: () => {},
  enableHapticFeedback: true,
  swipeable: true,
  zIndex: 99,
};

const useToaster = () => {
  const { toastConfig, setToastConfig } = useContext(AuthContext);

  const onDismiss = () => {
    setToastConfig({
      ...toastConfig,
      visible: false,
      message: '',
      showLoader: false,
      onDismiss: onDismiss,
    });
  };

  const showToast = (customConfig) => {
    setToastConfig({
      ...DEFAULT_CONFIG,
      ...customConfig,
      visible: true,
      onDismiss: onDismiss,
    });
  };

  return ({ showToast });
};

export default useToaster;
