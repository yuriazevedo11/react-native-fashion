import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';

import { SLIDE_HEIGHT } from './Slide';

const BORDER_RADIUS = 75;

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const Slider = styled(Animated.View)`
  height: ${SLIDE_HEIGHT}px;
  border-bottom-right-radius: ${BORDER_RADIUS}px;
`;

export const Pagination = styled.View.attrs({
  ...StyleSheet.absoluteFillObject,
})`
  height: ${BORDER_RADIUS - 5}px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Footer = styled.View`
  flex: 1;
`;

export const Underlay = styled(Animated.View).attrs({
  ...StyleSheet.absoluteFillObject,
})``;

export const FooterContent = styled(Animated.View)`
  flex: 1;
  background-color: #fff;
  border-top-left-radius: ${BORDER_RADIUS}px;
`;

export const SlidesWrapper = styled(Animated.View)`
  flex: 1;
  flex-direction: row;
  margin-top: 30px;
`;
