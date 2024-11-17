import "../global.css";
import { Slot, Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import React from 'react'
import { useEffect } from "react";
import GlobalProvider from "../context/GlobalProvider";


SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    'InstrumentSans': require('../assets/fonts/InstrumentSans-Regular.ttf'),
    'InstrumentSans-SemiBold': require('../assets/fonts/InstrumentSans-SemiBold.ttf'),
    'InstrumentSans-Bold': require('../assets/fonts/InstrumentSans-Bold.ttf'),
    'Staatliches-Regular': require('../assets/fonts/Staatliches-Regular.ttf'),

  });
  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return null;
  }

  if (!fontsLoaded && !error) {
    return null;
  }
  return (
    <GlobalProvider>
      <Stack >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      </Stack>
    </GlobalProvider>
  )
}

export default RootLayout
