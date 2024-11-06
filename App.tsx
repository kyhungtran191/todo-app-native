import {View, Text, Button, StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import {fontFamilies} from './src/constants/fontFamilies';
import HomeScreen from './src/pages/home/HomeScreen';

const App = () => {
  return (
    <>
      <StatusBar
        translucent
        barStyle={'light-content'}
        backgroundColor={'transparent'}></StatusBar>
      <HomeScreen></HomeScreen>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'coral',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: fontFamilies.bold,
    fontSize: 32,
    color: '#fff',
  },
});

export default App;
