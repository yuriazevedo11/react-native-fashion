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
  'SFProDisplay-Bold': require('./assets/fonts/SFProDisplay-Bold.ttf'),
  'SFProDisplay-Semibold': require('./assets/fonts/SFProDisplay-Semibold.ttf'),
  'SFProDisplay-Medium': require('./assets/fonts/SFProDisplay-Medium.ttf'),
  'SFProDisplay-Regular': require('./assets/fonts/SFProDisplay-Regular.ttf'),
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
