/* eslint-disable react/style-prop-object */
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Routes from './src/routes';
import { LoadAssets } from './src/components';

const fonts = {
  'SFProText-Bold': require('./assets/fonts/SF-Pro-Text-Bold.ttf'),
  'SFProText-Semibold': require('./assets/fonts/SF-Pro-Text-Semibold.ttf'),
  'SFProText-Regular': require('./assets/fonts/SF-Pro-Text-Regular.ttf'),
};

const App: React.FC = () => (
  <LoadAssets {...{ fonts }}>
    <StatusBar style="auto" />
    <Routes />
  </LoadAssets>
);

export default App;
