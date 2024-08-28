import { useState } from 'react';
import { View, TextInput, Button } from 'react-native'




export default function MyTextInput({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigation.navigate('Settings', { username });
  };

  return (
    <View>
      <TextInput
        placeholder="Nombre de usuario"
        onChangeText={(text) => setUsername(text)}
        value={username}
        style={{height: 40}}
      />
      <Button title="Ingresar" onPress={handleLogin} />
    </View>
  )
}