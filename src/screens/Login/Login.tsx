import React from 'react';

import { Box } from '@/components';
import { AuthenticationProps } from '@/routes/types';

// import { Container } from './Login.styles';

const Login: React.FC<AuthenticationProps<'Login'>> = () => {
  return <Box flex={1} />;
};

export default Login;
