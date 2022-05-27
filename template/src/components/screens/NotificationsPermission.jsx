import React, { useState } from 'react';
import View from 'react-native-ui-lib/view';
import Text from 'react-native-ui-lib/text';
import Button from 'react-native-ui-lib/button';
import messaging from '@react-native-firebase/messaging';

const NotificationsPermission = (props) => {
  const { navigation } = props;

  const requestUserPermission = () => {
    messaging().requestPermission().then((authStatus) => {
      const enabled = authStatus === messaging.AuthorizationStatus.AUTHORIZED || authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if (enabled) {
        console.log('Authorization status: ', authStatus);
        // TODO: update user on backend

        navigation.goBack();
      }
    })
  };

  return (
    <View>
      <Text>TODO</Text>
      <Button label="request notifications" onPress={requestUserPermission} />
    </View>
  );
};

export default NotificationsPermission;
