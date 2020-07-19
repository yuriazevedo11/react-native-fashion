import React from 'react';
import { Dimensions } from 'react-native';

import { SLIDE_HEIGHT, Container, TitleContainer, Title } from './Slide.styles';

const { width } = Dimensions.get('window');

interface SlideProps {
  label: string;
  right?: boolean;
}

const Slide = ({ label, right }: SlideProps) => {
  const transform = [
    { translateY: (SLIDE_HEIGHT - 100) / 2 },
    { translateX: right ? width / 2 - 50 : -width / 2 + 50 },
    { rotate: right ? '90deg' : '-90deg' },
  ];

  return (
    <Container>
      <TitleContainer style={{ transform }}>
        <Title>{label}</Title>
      </TitleContainer>
    </Container>
  );
};

export default Slide;
