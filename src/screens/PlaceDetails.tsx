import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import { useFavoritesContext } from '../context/AddFavoriteType';

const PlaceDetails = () => {
    const { addToFavorites } = useFavoritesContext();
  const addFavorite = () => {

    Alert.alert('Alert', 'Added To Favoritesss', [
      {
        text: 'OK',
      },
    ]);
  };
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://wallpapers.com/images/hd/forest-pictures-ghluxfda78g0i0ap.jpg',
        }}
        style={{height: 200}}></Image>

      <Text style={styles.description}>
        Forests are a diverse ecosystem on Earth that includes trees, shrubs,
        grasses, and other plants. Trees and plants make up a large portion of
        the forest. Forests are essential not only for human beings but also for
        all animals. But we rarely understand the depth of its importance for
        our survival.
      </Text>
      <TouchableOpacity
        onPress={() => {
          addFavorite();
        }}>
        <View style={styles.button}>
          <Text
            style={{
              fontSize: 18,
              color: 'white',
            }}>
            Add to favorites
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PlaceDetails;

const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    padding: 10,
    margin: 5,
    borderWidth: 2,
  },

  title: {
    textAlign: 'center',
    fontSize: 20,
    padding: 10,
    fontWeight: 'bold',
    color: Colors.black,
  },
  button: {
    height: 60,
    backgroundColor: 'red',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    padding: 10,
    color: Colors.black,
  },
});
