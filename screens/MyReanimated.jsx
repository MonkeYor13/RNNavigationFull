import { useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withSpring, withRepeat } from 'react-native-reanimated';


const SIZE = 100

export default function MyReanimated() {

  const progress = useSharedValue(1)
  const scale = useSharedValue(2)
  const width = useSharedValue(100)

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      transform: [{ scale: scale.value }],
      borderRadius: (progress.value * SIZE) / 2
    }
  }, [])

  useEffect(() => {
    progress.value = withTiming(0.5, { duration: 5000 })
    // scale.value = withTiming(2, { duration: 5000 })
    scale.value = withRepeat(withSpring(1), 3, true)
  }, [])

  const handlePress = () => {
    width.value = withSpring(width.value + 50);
  };


  return (
    <View style={styles.container}>
      <Animated.View style={[{
        height: SIZE, width: SIZE, backgroundColor: 'blue', marginTop: 200
      }, reanimatedStyle]} />

      <Animated.View
        style={{
          width,
          height: 100,
          backgroundColor: 'violet',
        }}
      />


      <Button onPress={handlePress} title="Click me" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red'
    alignItems: 'center'
  }
}
)