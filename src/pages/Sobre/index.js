import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { useRoute, useNavigation } from "@react-navigation/native";


export default function Sobre(){

    const route = useRoute();

    const navigation = useNavigation();

    useLayoutEffect( () => { // sincrono

        navigation.setOptions({
            title: route.params?.nome === '' ? 'Pagina sobre' : route.params?.nome
        })

    }, [])

    return(
        <View style = {styles.container}>
            <Text> Pagina Sobre</Text>
            <Text>{route.params?.nome}</Text>

            <Button title="tela de contatos"  onPress={ ()  => navigation.navigate('Contato')}/>
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