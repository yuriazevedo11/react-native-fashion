import React from 'react';

import { Text } from '../Theme';
import { Container } from './Button.styles';

export interface ButtonProps {
  label: string;
  variant?: 'default' | 'primary';
  onPress: () => void;
}

const Button = ({ label, variant = 'default', onPress }: ButtonProps) => {
  return (
    <Container {...{ variant, onPress }}>
      <Text
        fontFamily="SFProText-Regular"
        color={variant === 'primary' ? 'white' : 'title'}
        textAlign="center"
      >
        {label}
      </Text>
    </Container>
  );
};

export default Button;
