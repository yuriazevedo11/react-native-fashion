import React from 'react';

import { Button } from '@/components';

import { Container, Subtitle, Description } from './BottomSlide.styles';

interface BottomSlideProps {
  subtitle: string;
  description: string;
  last: boolean;
  onPress: () => void;
}

export const BottomSlide = ({
  subtitle,
  description,
  last,
  onPress,
}: BottomSlideProps) => {
  return (
    <Container>
      <Subtitle>{subtitle}</Subtitle>
      <Description>{description}</Description>
      <Button
        label={last ? "Let's get started" : 'Next'}
        variant={last ? 'primary' : 'default'}
        {...{ onPress }}
      />
    </Container>
  );
};
