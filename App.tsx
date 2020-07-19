/* eslint-disable react/style-prop-object */
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Routes from './src/routes';

const App: React.FC = () => (
  <>
    <StatusBar style="auto" />
    <Routes />
  </>
);

export default App;
