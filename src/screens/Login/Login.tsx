import React from 'react';

import {
  Box,
  Container,
  SocialLogin,
  Button,
  Text,
  TextField,
} from '@/components';
import { AuthenticationProps } from '@/routes/types';

const Login: React.FC<AuthenticationProps<'Login'>> = () => {
  const footer = (
    <>
      <SocialLogin />
      <Box alignItems="center">
        <Button variant="transparent" onPress={() => {}}>
          <Box flexDirection="row" justifyContent="center">
            <Text color="white">Don&apos;t have have an account?</Text>
            <Text color="primary" marginLeft="s">
              Sign Up Here
            </Text>
          </Box>
        </Button>
      </Box>
    </>
  );

  return (
    <Container {...{ footer }}>
      <Box padding="l">
        <Text variant="title1" marginBottom="m">
          Welcome back
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Use your credentials below and login to your account
        </Text>

        <Box marginBottom="m">
          <TextField icon="mail" placeholder="Enter your Email" />
        </Box>
        <TextField icon="lock" placeholder="Enter your Password" />
      </Box>
    </Container>
  );
};

export default Login;
