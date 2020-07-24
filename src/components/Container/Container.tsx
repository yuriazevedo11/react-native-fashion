import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { Box } from '../Theme';
import { Background, height } from './Container.styles';

export const assets = [require('../../../assets/bg-pattern.png')];

interface ContainerProps {
  footer?: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children, footer }) => {
  return (
    <Box flex={1} backgroundColor="title">
      <StatusBar style="light" />

      <Box backgroundColor="white">
        <Box
          borderBottomLeftRadius="xl"
          overflow="hidden"
          height={height * 0.6}
        >
          <Background source={assets[0]} />
        </Box>
      </Box>

      <Box flex={1} overflow="hidden">
        <Background overlay source={assets[0]} />
        <Box
          flex={1}
          borderRadius="xl"
          borderTopLeftRadius={0}
          backgroundColor="white"
        >
          {children}
        </Box>
      </Box>

      <Box backgroundColor="title">{footer}</Box>
    </Box>
  );
};

export default Container;
