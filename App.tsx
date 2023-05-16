import React, {useEffect, useState} from 'react';
import {NativeEventEmitter, NativeModules, Text, View} from 'react-native';

const {NetworkStatus} = NativeModules;
const networkStatusEmitter = new NativeEventEmitter(NetworkStatus);

const App = () => {
  const [networkStatus, setNetworkStatus] = useState('unknown');
  useEffect(() => {
    networkStatusEmitter.addListener('networkStatusChanged', ({status}) => {
      console.warn('Network status changed:', status);
      setNetworkStatus(status);
    });

    NetworkStatus.startMonitoring();
    return () => {
      networkStatusEmitter.removeAllListeners('networkStatusChanged');
      NetworkStatus.stopMonitoring();
    };
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{networkStatus}</Text>
    </View>
  );
};

export default App;
