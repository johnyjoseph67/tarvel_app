/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import jestConfig from './jest.config';
import Favorite from './src/screens/Favorite';
import PlaceList from './src/screens/PlaceList';
import TabNavigation from './src/navigator/TabNavigation';
import AppNavigation from './src/navigator/AppNavigation';


type SectionProps = PropsWithChildren<{
  title: string;
}>;
const Tab = createBottomTabNavigator();

function App(): JSX.Element {
  return (
    
    <SafeAreaView style={{flex:1}} >
      <View style={{flex:1}} >
     
       <AppNavigation></AppNavigation>
        {/* <TabNavigation></TabNavigation> */}
  
     </View>
     
    </SafeAreaView>
  );
}

export default App;
