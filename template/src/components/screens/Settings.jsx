import React, { useState } from 'react';
import View from 'react-native-ui-lib/view';
import Text from 'react-native-ui-lib/text';
import auth from '@react-native-firebase/auth';

const Settings = (props) => {
  const { navigation } = props;

  const logout = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  }

  return (
    <View>
      <Text>Add login logic here</Text>
      <Text>Refer to RN Firebase/Auth </Text>
      <Text>https://rnfirebase.io/auth/usage</Text>
    </View>
  );
};

export default Settings;
