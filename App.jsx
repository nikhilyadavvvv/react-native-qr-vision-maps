import React from 'react';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import persistStore from 'redux-persist/es/persistStore';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Paths from './src/utils/navigation/Paths';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const App = () => {
  let persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Paths />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};
export default App;