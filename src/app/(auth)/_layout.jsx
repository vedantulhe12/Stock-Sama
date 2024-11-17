import { View, Text } from 'react-native'
import React from 'react'
import { useEffect } from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { router } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage'

const AuthLayout = () => {
  const login = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) router.replace('/home');
  }

  useEffect(() => {
    login();
  }, [])

  return (
    <>
      <Stack>
        <Stack.Screen name="signin" options={{ headerShown: false }} />
        <Stack.Screen name="signup" options={{ headerShown: false }} />
        <Stack.Screen name="logout" options={{ headerShown: false }} />
      </Stack>
      <StatusBar backgroundColor="#161622" style="light" />
    </>
  )
}

export default AuthLayout