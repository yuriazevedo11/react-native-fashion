import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Onboarding, Welcome, Login } from '@/screens';

export type AuthenticationRoutes = {
  Onboarding: undefined;
  Welcome: undefined;
  Login: undefined;
};

const Stack = createStackNavigator();

const AuthenticationStack = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Onboarding" component={Onboarding} />
    <Stack.Screen name="Welcome" component={Welcome} />
    <Stack.Screen name="Login" component={Login} />
  </Stack.Navigator>
);

export default AuthenticationStack;
