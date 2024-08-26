import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';

export default function DetailsScreen() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // URL de la API ficticia
    // axios.get('https://jsonplaceholder.typicode.com/photos')
    //   .then(response => {
    //     // Solo tomamos las primeras 10 imágenes para simplificar
    //     setData(response.data.slice(0, 10));
    //     setLoading(false);
    //   })
    //   .catch(error => {
    //     console.error('Error fetching data:', error);
    //     setLoading(false);
    //   });
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image
              source={{ uri: item.url }}
              style={styles.image}
            />
            <Text style={styles.title}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#f0f0f0',
  },
  item: {
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
  },
});