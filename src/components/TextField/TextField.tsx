import React, { forwardRef } from 'react';
import { TextInputProps, TextInput, StyleSheet } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';

import useTheme from '@/hooks/useTheme';

import { Box } from '../Theme';

interface TextFieldProps extends TextInputProps {
  icon: string;
  touched?: boolean;
  error?: string;
}

const TextField = forwardRef<TextInput, TextFieldProps>(
  ({ icon, touched, error, ...textInputProps }, ref) => {
    const theme = useTheme();
    const validationSize = theme.borderRadii.m * 2;
    const restyleColor = (() => {
      if (touched && error) return 'danger';
      if (touched && !error) return 'primary';
      return 'baseText';
    })();
    const color = theme.colors[restyleColor];

    return (
      <Box
        height={48}
        padding="s"
        flexDirection="row"
        borderRadius="s"
        alignItems="center"
        borderColor={restyleColor}
        borderWidth={StyleSheet.hairlineWidth}
      >
        <Box padding="s">
          <Icon name={icon} size={16} {...{ color }} />
        </Box>

        <Box flex={1}>
          <TextInput
            placeholderTextColor={color}
            underlineColorAndroid="transparent"
            {...{ ref }}
            {...textInputProps}
          />
        </Box>

        {touched && (
          <Box
            height={validationSize}
            width={validationSize}
            borderRadius="m"
            justifyContent="center"
            alignItems="center"
            backgroundColor={error ? 'danger' : 'primary'}
          >
            <Icon name={error ? 'x' : 'check'} color="white" size={16} />
          </Box>
        )}
      </Box>
    );
  },
);

export default TextField;
