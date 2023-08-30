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
  FormControlLabel,
  FormControlLabelText,
  HStack,
} from '@gluestack-ui/themed';
import {appColors} from '../../constants/colorsContants';
import {useForm} from 'react-hook-form';
import InputBox from '../../components/inputBox';

const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const LoginInputs = ({navigation}: any) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
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

  return (
    <Center>
      <View>
        <FormControl
          p="$5"
          maxWidth="$96"
          width="$96"
          marginTop={'$6'}
          gap="$5">
          <VStack space="xl" py="$2">
            <FormControl
              size="md"
              isDisabled={false}
              isInvalid={errors.email ? true : false}
              isReadOnly={false}
              isRequired={true}>
              <FormControlLabel mb="$3">
                <FormControlLabelText style={styles.label} lineHeight="$xs">
                  Email
                </FormControlLabelText>
              </FormControlLabel>
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
              <HStack justifyContent="space-between" alignItems="center">
                <FormControlLabel mb="$3">
                  <FormControlLabelText style={styles.label} lineHeight="$xs">
                    Password
                  </FormControlLabelText>
                </FormControlLabel>

                <Text
                  mb="$3"
                  sx={{
                    textDecorationLine: 'underline',
                    opacity: 0.5,
                  }}
                  style={styles.label}
                  lineHeight="$xs">
                  Forgot?
                </Text>
              </HStack>
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
                Login
              </Text>
            </TouchableOpacity>
          </VStack>
        </FormControl>

        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          marginTop={'$10'}>
          <Button
            p="$0"
            size="sm"
            onPress={() => navigation.navigate('Register')}
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
              New User? Register Here
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

  label: {
    color: appColors.primary,
    fontFamily: 'Avenir',
    fontSize: 12,
    fontWeight: '400',
    textTransform: 'capitalize',
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

export default LoginInputs;
