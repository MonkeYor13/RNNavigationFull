import { View, Text, Button, Pressable, Linking } from 'react-native'


export default function HomeScreen({ navigation }) {
  const openMap = () => {
    const url = 'https://www.google.com/maps/?q=40.689247,-74.044502'; // Coordenadas de la Estatua de la Libertad
    Linking.openURL(url).catch((err) => console.error("No se pudo abrir el enlace:", err));
  };

  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title='Go to Settings'
        onPress={() => navigation.navigate('Settings')}
      />
      <Pressable
        onPress={() => navigation.navigate('Profile')}
        className='mb-5'
      >
        <Text className='text-blue-700 font-extrabold mt-5 text-center' >Go to Profile</Text>
      </Pressable>
      <Text className='text-center text-xl'>!Ver la ubicación en Google Maps Estatua de Libertad!</Text>
      <Button
        title="Click Aqui!"
        onPress={openMap}
      />
      <Button
        title="Mi Flexbox"
        onPress={() => navigation.navigate('MyFlexbos')}
      />
      <Button
        title="Mi Reanimated"
        onPress={() => navigation.navigate('MyReanimated')}
      />
    </View>
  )
}