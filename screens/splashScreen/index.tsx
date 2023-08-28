import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Text, Center, Image} from '@gluestack-ui/themed';
import {appColors} from '../../constants/colorsContants';
import {splashImg} from '../../constants/imageContants';

function SplashScreen({navigation}: any): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  console.log({splashImg});

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : appColors.primaryBg,
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigation.replace('Login');
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, [navigation]);

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={backgroundStyle}
      contentContainerStyle={styles.scrollViewContent}>
      <Center>
        <Center flex={1} alignItems="center" justifyContent="center">
          <Center bg={appColors.primaryBg}>
            <Image source={splashImg} sx={{position: 'relative'}} />
            <Text
              justifyContent="center"
              alignItems="center"
              sx={{
                position: 'absolute',
                bottom: -25,
                marginTop: 20,
                color: appColors.primary,
                textAlign: 'center',
                fontFamily: 'Avenir',
                fontSize: 36,
                fontWeight: '$black',
                padding: 20,
                letterSpacing: -0.6,
              }}>
              candy
            </Text>
          </Center>
          <Text
            justifyContent="center"
            alignItems="center"
            sx={{
              marginTop: 50,
              color: appColors.primary,
              textAlign: 'center',
              fontFamily: 'Avenir',
              fontSize: 12,
              fontWeight: '$normal',
            }}>
            Simple Task Manager
          </Text>
        </Center>
        <Center flex={2 / 16} alignItems="center" justifyContent="flex-end">
          <Text
            justifyContent="flex-end"
            alignItems="center"
            sx={{
              color: appColors.primary,
              textAlign: 'center',
              fontFamily: 'Avenir',
              fontSize: 12,
              fontWeight: '$normal',
              opacity: 0.5,
            }}>
            © 2017 Candy
          </Text>
        </Center>
      </Center>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen;
