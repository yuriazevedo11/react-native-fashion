import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Onboarding, Welcome } from '@/screens';

export type AuthenticationRoutes = {
  Onboarding: undefined;
  Welcome: undefined;
};

const Stack = createStackNavigator();

const AuthenticationStack = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Onboarding" component={Onboarding} />
    <Stack.Screen name="Welcome" component={Welcome} />
  </Stack.Navigator>
);

export default AuthenticationStack;
