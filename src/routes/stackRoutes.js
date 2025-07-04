import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../pages/home";
import Detalhes from "../pages/Detalhes";

const Stack = createNativeStackNavigator();

export default function StackRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name="Home"
            component={Home}
            />

            <Stack.Screen 
            name="Detalhes"
            component={Detalhes}
            />
        </Stack.Navigator>
    )
}