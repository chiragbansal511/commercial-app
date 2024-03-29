import React from 'react';
import {View ,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/home.js';
import Navbar from './components/navbar/navbar';
import Basebar from './components/basebar/basebar';

const Stack = createStackNavigator();

export default function App() {

  return (
    <>
     <Navbar />
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
    <Basebar />
    </>
  );
}

