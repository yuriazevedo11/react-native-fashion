import React from 'react';

import { Box, Container, SocialLogin, Button, Text } from '@/components';
import { AuthenticationProps } from '@/routes/types';

// import { Container } from './Login.styles';

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
      <Box flex={1} />
    </Container>
  );
};

export default Login;
