import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import { ButtonProps } from './Button';

interface ButtonStyleProps {
  variant?: ButtonProps['variant'];
}

export const Container = styled(RectButton)<ButtonStyleProps>`
  background-color: ${({ variant }) =>
    variant === 'primary' ? '#2cb9b0' : 'rgba(12, 13, 52, 0.05)'};
  border-radius: 25px;
  height: 50px;
  width: 245px;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.Text<ButtonStyleProps>`
  color: ${({ variant }) => (variant === 'primary' ? '#fff' : '#0c0d34')};
  font-family: SFProText-Regular;
  text-align: center;
`;
