import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { useNavigation } from "@react-navigation/native";

import Icon from "@react-native-vector-icons/evil-icons";
import Feather from 'react-native-vector-icons/Feather';



export default function Home(){

    const navigation = useNavigation();

    function navegaSobre(){
        navigation.navigate('Sobre')
    }
    return(
        <View style = {styles.container}>
            <Text> Tela home</Text>
            
            <Button  title="Ir para sobre" onPress={navegaSobre}/>
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})