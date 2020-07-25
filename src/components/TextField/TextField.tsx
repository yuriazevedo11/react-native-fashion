import React from 'react';
import { TextInputProps, TextInput, StyleSheet } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { useTheme } from '@shopify/restyle';

import { Theme } from '@/theme';

import { Box } from '../Theme';

interface TextFieldProps extends TextInputProps {
  icon: string;
}

const TextField = ({ icon, ...textInputProps }: TextFieldProps) => {
  const theme = useTheme<Theme>();

  return (
    <Box
      height={48}
      padding="s"
      flexDirection="row"
      borderRadius="s"
      alignItems="center"
      borderColor="baseText"
      borderWidth={StyleSheet.hairlineWidth}
    >
      <Box padding="s">
        <Icon name={icon} size={16} color={theme.colors.baseText} />
      </Box>
      <Box flex={1}>
        <TextInput underlineColorAndroid="transparent" {...textInputProps} />
      </Box>
      {/* TODO validation */}
    </Box>
  );
};

export default TextField;
