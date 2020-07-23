import React from 'react';

import { AuthenticationProps } from '@/routes/types';

import { Container } from './Welcome.styles';

const Welcome: React.FC<AuthenticationProps<'Welcome'>> = () => {
  return <Container />;
};

export default Welcome;
