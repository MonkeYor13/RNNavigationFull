import { View, Text, Button, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux';
import { addFruit } from '../store/fruitSlice';

const fruits = ['Apple', 'Banana', 'Orange', 'Grapes'];


export default function FrutasScreen({ navigation }) {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Fruits</Text>
      {fruits.map(fruit => (
        <Button
          key={fruit}
          title={`Add ${fruit}`}
          onPress={() => dispatch(addFruit(fruit))}
        />
      ))}
      <Button
        title="Go to Cart"
        onPress={() => navigation.navigate('CarritoScreen')}
      />
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
});