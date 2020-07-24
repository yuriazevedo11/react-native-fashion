/* eslint-disable react/style-prop-object */
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from '@shopify/restyle';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import Routes from '@/routes';
import { assets } from '@/screens';
import { LoadAssets } from '@/components';
import theme from '@/theme';

const fonts = {
  'SFProDisplay-Bold': require('./assets/fonts/SFProDisplay-Bold.ttf'),
  'SFProDisplay-Semibold': require('./assets/fonts/SFProDisplay-Semibold.ttf'),
  'SFProDisplay-Medium': require('./assets/fonts/SFProDisplay-Medium.ttf'),
  'SFProDisplay-Regular': require('./assets/fonts/SFProDisplay-Regular.ttf'),
};

const App: React.FC = () => (
  <ThemeProvider {...{ theme }}>
    <StyledThemeProvider {...{ theme }}>
      <LoadAssets {...{ fonts, assets }}>
        <StatusBar style="auto" />
        <Routes />
      </LoadAssets>
    </StyledThemeProvider>
  </ThemeProvider>
);

export default App;
