import React from 'react';

import { Container, Label } from './Button.styles';

export interface ButtonProps {
  label: string;
  variant?: 'default' | 'primary';
  onPress: () => void;
}

const Button = ({ label, variant = 'default', onPress }: ButtonProps) => {
  return (
    <Container {...{ variant, onPress }}>
      <Label {...{ variant }}>{label}</Label>
    </Container>
  );
};

export default Button;
