import React, {Component} from 'react';
import {
  ActivityIndicatorComponent,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native'
import RootNavigator from './src/navigator';

const App = () => {
  return (
     <RootNavigator/>
  )
};

export default App;
