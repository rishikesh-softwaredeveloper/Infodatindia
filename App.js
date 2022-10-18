import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Navigation from './navigation';
import { Provider } from 'react-redux';
import { store } from './state/store';

export default function App() {
  return (
    <Provider store={store}>
      <Navigation/>
    </Provider>
  );
}

