/* eslint-disable react/style-prop-object */
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from '@shopify/restyle';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import Routes from './src/routes';
import { LoadAssets } from './src/components';
import theme from './src/theme';

const fonts = {
  'SFProText-Bold': require('./assets/fonts/SF-Pro-Text-Bold.ttf'),
  'SFProText-Semibold': require('./assets/fonts/SF-Pro-Text-Semibold.ttf'),
  'SFProText-Regular': require('./assets/fonts/SF-Pro-Text-Regular.ttf'),
};

const App: React.FC = () => (
  <ThemeProvider {...{ theme }}>
    <StyledThemeProvider {...{ theme }}>
      <LoadAssets {...{ fonts }}>
        <StatusBar style="auto" />
        <Routes />
      </LoadAssets>
    </StyledThemeProvider>
  </ThemeProvider>
);

export default App;
