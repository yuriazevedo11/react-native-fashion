import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AuthenticationStack } from './navigators';

const Routes: React.FC = () => (
  <NavigationContainer>
    <AuthenticationStack />
  </NavigationContainer>
);

export default Routes;
