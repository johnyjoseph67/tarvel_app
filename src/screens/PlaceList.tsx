import {FlatList, StyleSheet, Text, Touchable, TouchableOpacity, View} from 'react-native';
import React, { useContext } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {  useNavigation } from '@react-navigation/native';


const cities = [
  'Trivandrum',
  'Kollom',
  'Alappuzha',
  'Ernakulam',
  'Idukki',
  'Kannur',
  'Kasargod',
];



const PlaceList = ({ }) => {
    const navigation = useNavigation();
  return (
    <View>
      <FlatList
        data={cities}
        renderItem={({item, index}) => {
            return (
              <View key={index}>
                    <TouchableOpacity onPress={() => {navigation.navigate('PlaceDetail' as never)}}>
                   <View style={styles.card}>
                <Text style={{color: Colors.black, fontSize: 15}}>{item}</Text>
              </View>      
              </TouchableOpacity>
             
            </View>
          );
        }}
      />
    </View>
  );
};

export default PlaceList;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor:'#00FF00',
    margin: 5,
    borderRadius: 20,
    minHeight: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
