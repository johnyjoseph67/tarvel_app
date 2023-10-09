import {StyleSheet, Text, View,Dimensions} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Favorite from '../screens/Favorite';
import {NavigationContainer} from '@react-navigation/native';
import PlaceList from '../screens/PlaceList';
import Icon from 'react-native-vector-icons/Ionicons';
import PlaceDetails from '../screens/PlaceDetails';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <View style={styles.container}>
 
        <Tab.Navigator>
          <Tab.Screen
            options={{
              tabBarIcon: ({focused, color, size}) => {
                return <Icon name="home" color={color} size={size} />;
              },
            }}
            name="Place List"
            component={PlaceList}></Tab.Screen>
          <Tab.Screen
            options={{
              tabBarIcon: ({focused, color, size}) => {
                return <Icon name="star" color={color} size={size} />;
              },
            }}
            name="Favorite"
            component={Favorite}></Tab.Screen>
        </Tab.Navigator>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
        flex: 1,
      
  },
});

export default TabNavigation;
