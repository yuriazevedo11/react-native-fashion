import React from 'react';
import { useTheme } from '@shopify/restyle';

import { Theme } from '@/theme';

import { Text } from '../Theme';
import { Container } from './Button.styles';

interface ButtonProps {
  label?: string;
  variant?: 'default' | 'primary' | 'transparent';
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'default',
  onPress,
  children,
}) => {
  const theme = useTheme<Theme>();
  const variants = {
    default: theme.colors.grey,
    primary: theme.colors.primary,
    transparent: theme.colors.transparent,
  };

  const backgroundColor = variants[variant];

  return (
    <Container {...{ backgroundColor, onPress }}>
      {children || (
        <Text
          variant="button"
          color={variant === 'primary' ? 'white' : 'secondary'}
        >
          {label}
        </Text>
      )}
    </Container>
  );
};

export default Button;
