import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ActivityIndicator, ScrollView, Image, StatusBar } from 'react-native';
import axios from 'axios';



export default function DetailsScreen() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=5');
        setData(res.data);
        setLoading(false)
      } catch (error) {
        console.log('error en la api', error)
        setError('Hay un Error!')
      }
    };
    // Llamar a la función asincrónica
    fetchData();
  }, []); // El array vacío asegura que el efecto solo se ejecute una vez, cuando el componente se monta.

  if (loading) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#f5f5f5', paddingTop: StatusBar.currentHeight, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size={'large'} color='red' />
        <Text>Cargando...</Text>
        <Text>{error}</Text>
      </SafeAreaView>
    )
  }
  return (
    <ScrollView>
      <Text>Datos de la API:</Text>
      {
        data.map((item) => (
          <View key={item.id}>
            <Text>Titulo es : {item.title}</Text>
            <Image source={{ uri: item.url }} style={styles.image} />
          </View>
        ))
      }

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
});