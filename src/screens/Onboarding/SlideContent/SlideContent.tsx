import React from 'react';

import { Button, Text, Box } from '@/components';

interface SlideContentProps {
  subtitle: string;
  description: string;
  last: boolean;
  onPress: () => void;
}

export const SlideContent: React.FC<SlideContentProps> = ({
  subtitle,
  description,
  last,
  onPress,
}) => {
  return (
    <Box flex={1} padding="l" justifyContent="center" alignItems="center">
      <Text variant="title2" marginBottom="m">
        {subtitle}
      </Text>
      <Text textAlign="center" variant="body" marginBottom="xl">
        {description}
      </Text>
      <Button
        label={last ? "Let's get started" : 'Next'}
        variant={last ? 'primary' : 'default'}
        {...{ onPress }}
      />
    </Box>
  );
};
