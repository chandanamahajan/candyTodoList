import React from 'react';
import {StyleSheet, View, TouchableOpacity, Keyboard} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {
  Text,
  Center,
  Box,
  VStack,
  Button,
  FormControl,
  FormControlHelper,
  FormControlHelperText,
} from '@gluestack-ui/themed';
import {appColors} from '../../constants/colorsContants';
import {useForm} from 'react-hook-form';
import InputBox from './inputBox';

const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const RegisterInputs = ({navigation}: any) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
    watch,
    reset,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });
  const onSubmit = (data: any) => {
    Keyboard.dismiss();
    console.log({data});
    reset();
  };

  const pwd = watch('password');

  return (
    <Center>
      <View>
        <FormControl
          p="$5"
          maxWidth="$96"
          width="$96"
          marginTop={'$12'}
          gap="$5">
          <VStack space="xl" py="$2">
            <FormControl
              size="md"
              isDisabled={false}
              isInvalid={errors.email ? true : false}
              isReadOnly={false}
              isRequired={true}>
              <InputBox
                name="email"
                control={control}
                rules={{
                  required: 'Email is required',
                  pattern: {
                    value: EMAIL_REGEX,
                    message: 'Email is invalid',
                  },
                }}
                label="Email"
              />
            </FormControl>
            <FormControl
              size="md"
              isDisabled={false}
              isInvalid={errors.password ? true : false}
              isReadOnly={false}
              isRequired={true}>
              <InputBox
                name="password"
                control={control}
                rules={{
                  required: 'Password is required',
                  minLength: {
                    value: 8,
                    message: 'Password should be atleast 8 characters long',
                  },
                }}
                label="Password"
              />
              <FormControlHelper>
                <FormControlHelperText>
                  Must be atleast 8 characters.
                </FormControlHelperText>
              </FormControlHelper>
            </FormControl>

            <FormControl
              size="md"
              isDisabled={false}
              isInvalid={errors.confirmPassword ? true : false}
              isReadOnly={false}
              isRequired={true}>
              <InputBox
                name="confirmPassword"
                control={control}
                rules={{
                  required: 'Password confirmation is required',
                  validate: (value: any) =>
                    value === pwd || 'Passwords do not match',
                }}
                label="Confirm Password"
              />
            </FormControl>
          </VStack>

          <VStack space="lg" pt="$4" gap={5}>
            <TouchableOpacity
              style={styles.btn}
              onPress={handleSubmit(onSubmit)}>
              <Text
                sx={{
                  fontFamily: 'Avenir',
                  fontSize: 14,
                  textAlign: 'center',
                  color: Colors.white,
                  fontWeight: '$extrabold',
                }}>
                Register
              </Text>
            </TouchableOpacity>
          </VStack>
        </FormControl>

        <Box justifyContent="center" alignItems="center" marginTop={'$1'}>
          <Box width="$48">
            <Text
              style={styles.footerText}
              sx={{
                fontWeight: '$normal',
              }}>
              By registering, you automatically accept the{' '}
              <Text
                style={styles.footerText}
                sx={{
                  fontWeight: '$medium',
                  textDecorationLine: 'underline',
                }}>
                Terms & Policies
              </Text>{' '}
              of candy app.
            </Text>
          </Box>
        </Box>
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          marginTop={'$10'}>
          <Button
            p="$0"
            size="sm"
            onPress={() => navigation.navigate('Login')}
            variant="link">
            <Text
              textAlign="center"
              sx={{
                fontFamily: 'Avenir',
                fontSize: 14,
                textAlign: 'center',
                color: appColors.primary,
                textDecorationLine: 'underline',
                fontWeight: '$extrabold',
              }}>
              Have account? Log In
            </Text>
          </Button>
        </Box>
      </View>
    </Center>
  );
};

const styles = StyleSheet.create({
  heading: {
    marginTop: 32,
    fontFamily: 'Avenir',
    fontSize: 14,
    textAlign: 'center',
    color: appColors.primary,
    letterSpacing: 4,
    textTransform: 'uppercase',
  },

  footerText: {
    color: appColors.primary,
    textAlign: 'center',
    fontFamily: 'Avenir',
    fontSize: 12,
  },

  btn: {
    backgroundColor: appColors.primary,
    borderRadius: 8,
    height: 51,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RegisterInputs;
