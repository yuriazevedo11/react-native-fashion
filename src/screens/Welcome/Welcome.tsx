import React from 'react';
import { StyleSheet, Image } from 'react-native';

import { AuthenticationProps } from '@/routes/types';
import { Box, Text, Button } from '@/components';

const Welcome: React.FC<AuthenticationProps<'Welcome'>> = () => {
  return (
    <Box flex={1} backgroundColor="white">
      <Box
        flex={1}
        backgroundColor="grey"
        borderBottomRightRadius="xl"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Image
          source={require('../../../assets/welcome.png')}
          style={{
            aspectRatio: 408 / 525,
            height: '100%',
          }}
        />
      </Box>

      <Box flex={1}>
        <Box {...StyleSheet.absoluteFillObject} backgroundColor="grey" />
        <Box
          flex={1}
          backgroundColor="white"
          borderTopLeftRadius="xl"
          alignItems="center"
          justifyContent="space-between"
          padding="l"
        >
          <Text variant="title2">Let&apos;s get started</Text>
          <Text variant="body" textAlign="center" marginBottom="m">
            Login to your account below or signup for an amazing experience
          </Text>
          <Button
            variant="primary"
            label="Have an account? Login"
            onPress={() => {}}
          />
          <Button label="Join us, it's Free" onPress={() => {}} />
          <Button
            variant="transparent"
            label="Forgot password?"
            onPress={() => {}}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;
