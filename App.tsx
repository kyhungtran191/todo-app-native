import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import HomeScreen from './src/pages/home/HomeScreen';
import Router from './src/routers/Router';
import {NavigationContainer} from '@react-navigation/native';
import {AlertNotificationRoot} from 'react-native-alert-notification';

const App = () => {
  return (
    <>
      <AlertNotificationRoot>
        <StatusBar
          translucent
          barStyle={'light-content'}
          backgroundColor={'transparent'}></StatusBar>
        <SafeAreaView style={{flex: 1}}>
          <NavigationContainer>
            <Router></Router>
          </NavigationContainer>
        </SafeAreaView>
      </AlertNotificationRoot>
    </>
  );
};

export default App;
