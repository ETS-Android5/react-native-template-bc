import React, { useReducer, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import View from 'react-native-ui-lib/view';
import Text from 'react-native-ui-lib/text';
import {
  Colors,
  Header,
} from 'react-native/Libraries/NewAppScreen';
import { storage } from './src/storage';
import * as RNLocalize from "react-native-localize";
import { setI18nConfig, translate } from './src/i18n';
import AuthContext from './src/authContext';
import auth from '@react-native-firebase/auth';

const App = () => {
  const [ignored, forceUpdate] = useReducer(x => {
    return (x + 1);
  }, 0);

  // auth context stuff
  // const [isLoading, setIsLoading] = useState(true);
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  // const [isSignedout, setIsSignedout] = useState(false);
  // const [userToken, setUserToken] = useState(null);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

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
    }}>
      <RootNavigator />
    </AuthContext.Provider>
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}
        >
          <Text>{translate('test.test')}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
