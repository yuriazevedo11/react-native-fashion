import React from 'react';

import { Box, Container } from '@/components';
import { AuthenticationProps } from '@/routes/types';

// import { Container } from './Login.styles';

const Login: React.FC<AuthenticationProps<'Login'>> = () => {
  return (
    <Container>
      <Box flex={1} />
    </Container>
  );
};

export default Login;
