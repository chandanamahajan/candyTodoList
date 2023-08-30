import React from 'react';
import {ScrollView, StyleSheet, useColorScheme, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Heading} from '@gluestack-ui/themed';
import {appColors} from '../../constants/colorsContants';
import LoginInputs from './loginInputs';

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

        <LoginInputs navigation={navigation} />
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
});

export default Login;
