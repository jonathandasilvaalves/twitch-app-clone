import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppLoading } from 'expo';
import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto';
import { ThemeProvider } from 'styled-components';
import { useColorScheme } from 'react-native-appearance';

import Routes from './src/routes';

import themes from './src/themes';


export default function App() {
  const colorScheme = useColorScheme();

  const theme = themes[colorScheme] || themes.dark;

  let [fontsLoaded] = useFonts({
    roboto_400: Roboto_400Regular,
    roboto_500: Roboto_500Medium,
    roboto_700: Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }


  return (
    <ThemeProvider theme={theme}>
      <Routes colors={theme}/>
      <StatusBar style="light" />
    </ThemeProvider>
  );
}
