import React, { useRef } from 'react';
import { TouchableOpacity, TextInput } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import {
  Box,
  Container,
  SocialLogin,
  Button,
  Text,
  TextField,
  Checkbox,
} from '@/components';
import { AuthenticationProps } from '@/routes/types';

const LoginValidationSchema = Yup.object({
  password: Yup.string()
    .min(6, 'Must be at least 6 characters')
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
});

const Login: React.FC<AuthenticationProps<'Login'>> = () => {
  const {
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
    setFieldValue,
    handleSubmit,
  } = useFormik({
    onSubmit: (formValues) => console.log(formValues), // eslint-disable-line no-console
    validationSchema: LoginValidationSchema,
    initialValues: {
      email: '',
      password: '',
      remember: false,
    },
  });

  const passwordRef = useRef<TextInput>(null);

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
          <TextField
            icon="mail"
            placeholder="Enter your Email"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            touched={touched.email}
            error={errors.email}
            keyboardType="email-address"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current?.focus()}
            blurOnSubmit={false}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </Box>

        <TextField
          icon="lock"
          placeholder="Enter your Password"
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          touched={touched.password}
          error={errors.password}
          secureTextEntry
          returnKeyType="send"
          ref={passwordRef}
          onSubmitEditing={() => handleSubmit()}
        />

        <Box flexDirection="row" justifyContent="space-between" marginTop="m">
          <Checkbox
            label="Remember me"
            onChange={() => setFieldValue('remember', !values.remember)}
            checked={values.remember}
          />

          <TouchableOpacity onPress={() => {}}>
            <Text color="primary">Forgot password</Text>
          </TouchableOpacity>
        </Box>

        <Box alignItems="center" marginTop="l">
          <Button
            variant="primary"
            label="Log into your account"
            onPress={handleSubmit}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
