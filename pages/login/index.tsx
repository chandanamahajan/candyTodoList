import React from 'react';
import {ScrollView, StyleSheet, useColorScheme, View} from 'react-native';
import {appColors} from '../../constants/colorsContants';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Heading, Text, Box, Button} from '@gluestack-ui/themed';

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
        <Heading style={styles.heading}>Login</Heading>

        <Box flexDirection="row">
          <Button variant="link" p="$0" size="sm">
            <Button onPress={() => navigation.navigate('Register')}>
              <Text>Back to Register</Text>
            </Button>
          </Button>
        </Box>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 14,
    textAlign: 'center',
    color: '#243B6B',
    fontFamily: 'Avenir',
    letterSpacing: 4,
    textTransform: 'uppercase',
  },
});

export default Login;
