import { StackNavigationProp } from '@react-navigation/stack';
import { ParamListBase, RouteProp } from '@react-navigation/native';

import { AuthenticationRoutes } from './navigators/AuthenticationStack';

interface StackNavigationProps<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList = string
> {
  navigation: StackNavigationProp<ParamList, RouteName>;
  route: RouteProp<ParamList, RouteName>;
}

export type AuthenticationProps<
  RouteName extends keyof AuthenticationRoutes
> = StackNavigationProps<AuthenticationRoutes, RouteName>;
