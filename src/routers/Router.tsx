import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../pages/home/HomeScreen';
import AddNewTask from '../pages/tasks/AddNewTask';
import SearchScreen from '../pages/SearchScreen';

const Router = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen}></Stack.Screen>
      <Stack.Screen name="AddNewTask" component={AddNewTask}></Stack.Screen>
      <Stack.Screen name="SearchTask" component={SearchScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default Router;
