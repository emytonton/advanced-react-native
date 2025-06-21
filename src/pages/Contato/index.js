import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { useNavigation, StackActions } from "@react-navigation/native";


export default function Contato(){

    const navigation = useNavigation();

    function handleHome(){
        navigation.dispatch(StackActions.popToTop())
    }


    return(
        <View>
            <Text>Pag de contatos</Text>
            <Button  title="Voltar para home" onPress={handleHome}/>
        </View>
    );
}