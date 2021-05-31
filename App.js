import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import HomeStackNavigator from './src/Navigator';

import{
  useFonts
} from '@expo-google-fonts/montserrat';

export default function App(){
    let [fontsloaded] = useFonts({

    });
    return(
      <NavigationContainer>
        <HomeStackNavigator/>
      </NavigationContainer>
    );
}
