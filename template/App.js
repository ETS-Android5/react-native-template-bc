import React, { useState, useEffect } from 'react';

// load design system foundation
import './src/foundation/colors';
import './src/foundation/typography';
import './src/foundation/spacings';
import './src/foundation/assets';

import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import { Incubator } from 'react-native-ui-lib';
import View from 'react-native-ui-lib/view';
import { storage } from './src/storage';
import AuthContext from './src/authContext';
import RootNavigator from './src/components/navigators/RootNavigator';
import useLocalization from './src/hooks/useLocalization';

const { Toast } = Incubator;

const App = () => {
  // auth context stuff
  // const [isLoading, setIsLoading] = useState(true);
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  // const [isSignedout, setIsSignedout] = useState(false);
  // const [userToken, setUserToken] = useState(null);

  const [toastConfig, setToastConfig] = useState({});

  useLocalization();

  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  return (
    <AuthContext.Provider value={{
      initializing,
      user,
      toastConfig, // TODO: move to another context or rename this one
      setToastConfig,
    }}>
      <View flex useSafeArea>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </View>
      <Toast {...toastConfig} />
    </AuthContext.Provider>
  );
};

export default App;
