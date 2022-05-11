import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthContext from '../../authContext';
import Intro from '../screens/Intro';
import Login from '../screens/Login';
import Home from '../screens/Home';
import Settings from '../screens/Settings';
import SplashScreen from '../screens/SplashScreen';

const Stack = createStackNavigator();

const RootNavigator = () => {
  const {
    initializing,
    user,
  } = useContext(AuthContext);

  if (initializing) {
    return <SplashScreen />;
  }

  return (
    <Stack.Navigator>
      {
        !user && (
          <>
            <Stack.Screen name="Intro" component={Intro} />
            <Stack.Screen name="Login" component={Login} />
          </>
        )
        user && (
          <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Settings" component={Settings} />
          </>
        )
      }
    </Stack.Navigator>
  );
};

export default RootNavigator;
