import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function HomeScreen() {
  return (
    <View style={styles.cont}>
      <View style={styles.box}>
        <Text style={styles.text}>HomeScreen</Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  cont: {
    flex: 1,
    backgroundColor: 'plum',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 300,
    height: 300,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },

})