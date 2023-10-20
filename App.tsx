import React from 'react';
import { useFonts, Montserrat_700Bold } from "@expo-google-fonts/montserrat";
import { Login } from './src/pages/Login/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SinglePage } from './src/pages/SinglePage';
import { Barbeiro } from './src/pages/Barbeiro';
import { Registro } from './src/pages/Registro';
import { Provider } from 'react-redux';
import { TrocarSenha } from './src/pages/TrocarSenha';
import { NovoBarbeiro } from './src/pages/NovoBarbeiro';
import store from './src/services/redux/store'
import { MudarLocalizacao } from './src/pages/MudarLocalizacao';


const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Montserrat_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen
          name='Login'
          component={Login}
          options={{headerShown: false}}
          />
          <Stack.Screen
          name='SinglePage'
          component={SinglePage}
          options={{headerShown: false}}
          />
          <Stack.Screen
          name='Registro'
          component={Registro}
          options={{headerShown: false}}
          />
          <Stack.Screen
          name='Barbeiro'
          component={Barbeiro}
          options={{headerShown: false}}
          />
          <Stack.Screen
          name='TrocarSenha'
          component={TrocarSenha}
          options={{headerShown: false}}
          />
          <Stack.Screen
          name='NovoBarbeiro'
          component={NovoBarbeiro}
          options={{headerShown: false}}
          />          
          <Stack.Screen
          name='MudarLocalizacao'
          component={MudarLocalizacao}
          options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


