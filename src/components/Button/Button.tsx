import React from 'react';

import theme from '@/theme';

import { Text } from '../Theme';
import { Container } from './Button.styles';

interface ButtonProps {
  label: string;
  variant?: 'default' | 'primary' | 'transparent';
  onPress: () => void;
}

const VARIANTS = {
  default: theme.colors.grey,
  primary: theme.colors.primary,
  transparent: theme.colors.transparent,
};

const Button = ({ label, variant = 'default', onPress }: ButtonProps) => {
  const backgroundColor = VARIANTS[variant];

  return (
    <Container {...{ backgroundColor, onPress }}>
      <Text variant="button" color={variant === 'primary' ? 'white' : 'title'}>
        {label}
      </Text>
    </Container>
  );
};

export default Button;
