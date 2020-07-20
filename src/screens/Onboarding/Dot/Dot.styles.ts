import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

const SIZE = 6;

export const Container = styled(Animated.View)`
  background-color: ${({ theme }) => theme.colors.primary};
  height: ${SIZE}px;
  width: ${SIZE}px;
  border-radius: ${SIZE / 2}px;
  margin: ${(SIZE * 2) / 3}px;
`;
