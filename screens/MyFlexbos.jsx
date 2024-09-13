import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function MyFlexbos() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, {backgroundColor: 'orange', }]} />
      <View style={[styles.box, {backgroundColor: 'blue', flex: 2}]} />
      <View style={[styles.box, {backgroundColor: 'red', flex: 2, position: 'absolute', right: 0}]} />
      <View style={[styles.box, {backgroundColor: 'pink', flex: 2}]} />
      <View style={[styles.box, {backgroundColor: 'gray', flex: 2}]} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
    // direction: 'rtl',
    backgroundColor: 'white',
    // alignItems: 'flex-end', //defaut strech
    // justifyContent:  'center', //defaut start

  },
  box:{
    width: 100,
    height: 100,
  }
})