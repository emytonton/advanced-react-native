import React from "react";

import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import Home from "./src/pages/home";
import Sobre from "./src/pages/Sobre";
import Contato from "./src/pages/Contato";


const Stack = createNativeStackNavigator();

export default function App(){
  return(
  <NavigationContainer>
    <Stack.Navigator>

      <Stack.Screen name="Home"  component={Home} options={{
        title: 'Tela inicio',
        headerStyle:{
          backgroundColor: '#000'
        },
        headerTintColor:'#FFF'
      
      }}
      
      />


      <Stack.Screen 
      name="Contato"
      component={Contato}
      />



      <Stack.Screen name="Sobre" component={Sobre}  />

    </Stack.Navigator>
  </NavigationContainer>
  );

}