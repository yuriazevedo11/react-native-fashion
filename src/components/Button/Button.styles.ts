import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface ButtonStyleProps {
  backgroundColor: string;
}

export const Container = styled(RectButton)<ButtonStyleProps>`
  border-radius: 25px;
  height: 50px;
  width: 245px;
  justify-content: center;
  align-items: center;
`;
