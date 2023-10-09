import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigation from './TabNavigation';
import PlaceDetails from '../screens/PlaceDetails';

interface AppNavigationProps {}

const Stack = createNativeStackNavigator();

const AppNavigation: React.FC<AppNavigationProps> = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TabNavigation">
        <Stack.Screen
          options={{headerShown: false}}
          name="TabNavigation"
          component={TabNavigation}
        />
        <Stack.Screen name="PlaceDetail" component={PlaceDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});
