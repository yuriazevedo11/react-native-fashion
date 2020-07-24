import styled from 'styled-components/native';
import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
const aspectRatio = 189 / 375;
export const height = width * aspectRatio;

interface ContainerStyleProps {
  overlay?: boolean;
}

export const Background = styled.Image.attrs<ContainerStyleProps>(
  ({ overlay }) => (overlay ? { ...StyleSheet.absoluteFillObject } : {}),
)<ContainerStyleProps>`
  border-bottom-left-radius: ${({ theme }) => theme.borderRadii.xl}px;
  width: ${width}px;
  height: ${height}px;
  top: ${({ overlay }) => (overlay ? -height * 0.6 : 0)}px;
`;
