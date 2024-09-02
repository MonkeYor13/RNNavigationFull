import { View, Text } from 'react-native'
import React from 'react'

export default function SettingsScreen({route}) {
  const {username} = route.params
  return (
    <View>
      <Text>SettingsScreen</Text>
      <Text>Bienvenido, {username}</Text>
    </View>
  )
}