import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Onboarding } from '@/screens';

const Stack = createStackNavigator();

const AuthenticationStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Onboarding" component={Onboarding} />
  </Stack.Navigator>
);

export default AuthenticationStack;
