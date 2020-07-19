import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';

import { SLIDE_HEIGHT } from './Slide';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const Slider = styled(Animated.View)`
  height: ${SLIDE_HEIGHT}px;
  border-bottom-right-radius: 75px;
`;

export const Footer = styled.View`
  flex: 1;
`;

export const Underlay = styled(Animated.View).attrs({
  ...StyleSheet.absoluteFillObject,
})``;

export const Overlay = styled.View`
  flex: 1;
  border-top-left-radius: 75px;
  background-color: #fff;
`;
