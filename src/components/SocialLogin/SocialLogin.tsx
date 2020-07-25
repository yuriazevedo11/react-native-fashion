import React from 'react';

import { Box } from '../Theme';
import SocialIcon from './SocialIcon';

const SocialLogin: React.FC = () => {
  return (
    <Box flexDirection="row" justifyContent="center">
      <SocialIcon provider="google" />
      <SocialIcon provider="facebook" />
      <SocialIcon provider="apple" />
    </Box>
  );
};

export default SocialLogin;
