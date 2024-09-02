import { View, Text, Button } from 'react-native'
import Contexto from '../context/Contexto'
import { useContext } from 'react'


export default function Proveedor() {
  const { cantidadManzanas, agregarManzana } = useContext(Contexto)

  return (
    <View>
      <Text>Tienes {cantidadManzanas} Manzanas</Text>
      <Button title='Agregar' onPress={agregarManzana} ></Button>
    </View>
  )
}

