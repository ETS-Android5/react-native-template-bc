import React, { useEffect, useReducer } from 'react';
import * as RNLocalize from "react-native-localize";
import { setI18nConfig } from '../i18n';

const useLocalization = () => {
  const [ignored, forceUpdate] = useReducer(x => {
    return (x + 1);
  }, 0);

  useEffect(() => { // I18n
    forceUpdate();
    handleLocalizationChange = () => {
      setI18nConfig();
      forceUpdate();
    };

    setI18nConfig();
    RNLocalize.addEventListener('change', handleLocalizationChange);

    return () => {
      RNLocalize.removeEventListener('change', handleLocalizationChange);
    }
  }, []);
};

export default useLocalization;
