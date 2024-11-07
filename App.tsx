import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import HomeScreen from './src/pages/home/HomeScreen';
import Router from './src/routers/Router';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <>
      <StatusBar
        translucent
        barStyle={'light-content'}
        backgroundColor={'transparent'}></StatusBar>
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <Router></Router>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
};

export default App;
