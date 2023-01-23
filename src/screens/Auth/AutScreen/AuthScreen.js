import { View } from 'react-native'
import { Text, Button } from 'react-native-elements'
import React from 'react'
import { useTheme } from "../../../hooks";

export function AuthScreen() {
    const {toggleTheme} = useTheme();
  return (
    <View>
      <Text>AuthScreen</Text>
      <Button title="cambiar tema" onPress={toggleTheme} />
    </View>
  )
}