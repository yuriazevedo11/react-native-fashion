import React from 'react';
import { Feather as Icon } from '@expo/vector-icons';

import { Container } from './Checkbox.styles';
import { Box, Text } from '../Theme';

interface CheckboxProps {
  label: string;
  checked?: boolean;
  onChange: () => void;
}

const Checkbox = ({ label, checked, onChange }: CheckboxProps) => {
  return (
    <Container onPress={onChange}>
      <Box flexDirection="row" alignItems="center">
        <Box
          height={20}
          width={20}
          borderRadius="s"
          marginRight="m"
          justifyContent="center"
          alignItems="center"
          borderWidth={1}
          borderColor="primary"
          backgroundColor={checked ? 'primary' : 'white'}
        >
          <Icon name="check" color="white" />
        </Box>

        <Text variant="button">{label}</Text>
      </Box>
    </Container>
  );
};

export default Checkbox;
