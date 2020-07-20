import React from 'react';
import { Dimensions } from 'react-native';

import { Text, Box } from '@/components';

const { width, height } = Dimensions.get('window');
export const SLIDE_HEIGHT = height * 0.57;
export const TITLE_HEIGHT = 100;

interface SlideProps {
  title: string;
  right?: boolean;
}

const Slide: React.FC<SlideProps> = ({ title, right }) => {
  const transform = [
    { translateY: (SLIDE_HEIGHT - 100) / 2 },
    { translateX: right ? width / 2 - 50 : -width / 2 + 50 },
    { rotate: right ? '90deg' : '-90deg' },
  ];

  return (
    <Box width={width}>
      <Box style={{ height: TITLE_HEIGHT, transform }}>
        <Text variant="hero">{title}</Text>
      </Box>
    </Box>
  );
};

export default Slide;
