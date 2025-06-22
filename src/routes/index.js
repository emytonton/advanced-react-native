import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feather from 'react-native-vector-icons/Feather';



import Home from "../pages/home";
import Sobre from "../pages/Sobre";
import Contato from "../pages/Contato";

const Tab = createBottomTabNavigator();

export default function Routes(){
  return(
    <Tab.Navigator
    //screenOptions={{ para desativar o header em todas as paginas
     // headerShown:
    //}}
    >
      <Tab.Screen 
      name="Home"
      component={Home}
      options={{
        //tabBarLabel: 'Inicio'
        tabBarIcon: ({color, size}) => {
          return <Feather  name = "home" color={color} size = {size} />
        }
      }}
      />

      <Tab.Screen 
      name="Sobre"
      component={Sobre}
      options={{
        tabBarIcon: ({color, size}) => {
          return <Feather  name = "file-text" color={color} size = {size} />
        }
      }}
      />

      <Tab.Screen 
      name="Contato"
      component={Contato}
      options={{
        tabBarIcon: ({color, size}) => {
          return <Feather  name = "phone-call" color={color} size = {size} />
        }
      }}
      />
    </Tab.Navigator>
  
  );

}