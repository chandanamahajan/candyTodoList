import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {config, GluestackUIProvider} from '@gluestack-ui/themed';
import {Register, Login} from './pages/';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {appColors} from './constants/colorsContants';
function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : appColors.primaryBg,
  };

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <GluestackUIProvider config={config.theme}>
        <SafeAreaView style={backgroundStyle}>
          <Stack.Navigator>
            <Stack.Screen
              name="Register"
              component={Register}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </SafeAreaView>
      </GluestackUIProvider>
    </NavigationContainer>
  );
}

export default App;
