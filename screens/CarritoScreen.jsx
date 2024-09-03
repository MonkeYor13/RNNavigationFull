import { View, Text, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeFruit } from '../store/fruitSlice';

export default function CarritoScreen() {
  const dispatch = useDispatch();
  const selectedFruits = useSelector(state => state.fruits.selectedFruits);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>
      {selectedFruits.length > 0 ? (
        selectedFruits.map(fruit => (
          <View key={fruit} style={styles.item}>
            <Text>{fruit}</Text>
            <Button
              title="Remove"
              onPress={() => dispatch(removeFruit(fruit))}
            />
          </View>
        ))
      ) : (
        <Text>No fruits added yet!</Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
});