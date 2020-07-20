import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import { ButtonProps } from './Button';

interface ButtonStyleProps {
  variant?: ButtonProps['variant'];
}

export const Container = styled(RectButton)<ButtonStyleProps>`
  background-color: ${({ variant, theme: { colors } }) =>
    variant === 'primary' ? colors.primary : colors.buttonDefaultBackground};
  border-radius: 25px;
  height: 50px;
  width: 245px;
  justify-content: center;
  align-items: center;
`;
