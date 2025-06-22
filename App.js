import React from "react";

import {NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";



import Home from "./src/pages/home";
import Sobre from "./src/pages/Sobre";
import Contato from "./src/pages/Contato";



const Tab = createBottomTabNavigator();

export default function App(){
  return(
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen 
      name="Home"
      component={Home}
      />

      <Tab.Screen 
      name="Sobre"
      component={Sobre}
      />

      <Tab.Screen 
      name="Contato"
      component={Contato}
      />
    </Tab.Navigator>
  
    
  </NavigationContainer>
  );

}