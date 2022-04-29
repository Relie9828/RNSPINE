import { ApplicationProvider, IconRegistry, } from '@ui-kitten/components';
import { NavigationContainer } from '@react-navigation/native';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import React, { useState, useEffect } from 'react';
import { BottomTab } from './src/Navigation';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'react-native';
import * as eva from '@eva-design/eva';
import { useFonts } from 'expo-font';


export default function App () {
  
  const STYLES = 'dark-content';
  const TRANSITIONS = 'fade';

  const [lightMode, setLightMode] = useState(true);
  const [toggled, setToggled] = useState(false);

  let [fontsLoaded] = useFonts({
    'Glory-Medium': require('./assets/fonts/Glory-Medium.ttf'),
    'Nunito-Medium': require('./assets/fonts/Nunito-SemiBold.ttf'),
    'Glory-BoldItalic': require('./assets/fonts/Glory-BoldItalic.ttf')
  });
  if(!fontsLoaded) {
    return <AppLoading />
  };

  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <IconRegistry icons={EvaIconsPack} />
      <NavigationContainer>
        <StatusBar barStyle={STYLES} animated={true} showHideTransition={TRANSITIONS} />
          <BottomTab />
      </NavigationContainer>
    </ApplicationProvider>
  )
}