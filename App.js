import React from 'react';
import { StatusBar } from 'expo-status-bar';
import AppStack from './src/routes/AppStack'
import { AppLoading } from 'expo'
import { useFonts, Arvo_400Regular, Arvo_700Bold } from '@expo-google-fonts/arvo'

export default function App() {
  let [fontsLoaded] = useFonts({
    Arvo_400Regular,
    Arvo_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <AppStack />
        <StatusBar hidden/>
      </>
    )
  }
}
