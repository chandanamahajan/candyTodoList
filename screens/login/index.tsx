import React from 'react';
import {ScrollView, StyleSheet, useColorScheme, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {
  Heading,
  Text,
  Center,
  Box,
  VStack,
  Input,
  InputInput,
  Button,
  ButtonText,
  FormControl,
  HStack,
} from '@gluestack-ui/themed';
import {appColors} from '../../constants/colorsContants';

const RegisterInputs = ({navigation}: any) => {
  return (
    <Center>
      <FormControl p="$5" maxWidth="$96" width="$96" marginTop={'$24'} gap="$5">
        <VStack space="xl" py="$2">
          <VStack space="md">
            <Text lineHeight="$xs" style={styles.label}>
              Email
            </Text>
            <Input style={styles.inputBox} borderRadius="$md" height={51}>
              <InputInput py="$2" type="text" />
            </Input>
          </VStack>
          <VStack space="md">
            <HStack justifyContent="space-between" alignItems="center">
              <Text lineHeight="$xs" style={styles.label}>
                Password
              </Text>
              <Text
                style={styles.label}
                sx={{
                  textDecorationLine: 'underline',
                  opacity: 0.5,
                }}>
                Forgot?
              </Text>
            </HStack>
            <Input style={styles.inputBox} borderRadius="$md" height={51}>
              <InputInput py="$2" type="password" />
            </Input>
          </VStack>
        </VStack>
        <VStack space="lg" pt="$4" gap={5}>
          <Button
            size="xl"
            backgroundColor={appColors.primary}
            borderRadius={8}
            height={51}>
            <ButtonText
              sx={{
                fontFamily: 'Avenir',
                fontSize: 14,
                textAlign: 'center',
                color: Colors.white,
                fontWeight: '$extrabold',
              }}>
              Login
            </ButtonText>
          </Button>

          <Box
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            marginTop={'$3'}>
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
        </VStack>
      </FormControl>
    </Center>
  );
};

function Login({navigation}: any): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : appColors.primaryBg,
  };

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={backgroundStyle}>
      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : appColors.primaryBg,
        }}>
        <Heading
          style={styles.heading}
          sx={{
            fontWeight: '$black',
          }}>
          Login
        </Heading>

        <RegisterInputs navigation={navigation} />
      </View>
    </ScrollView>
  );
}

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
  },
  inputBox: {
    backgroundColor: Colors.white,
    borderColor: appColors.white100,
  },
  footerText: {
    color: appColors.primary,
    textAlign: 'center',
    fontFamily: 'Avenir',
    fontSize: 12,
  },
});

export default Login;
