import React, { use } from "react";
import { View, Text, StyleSheet } from "react-native";

import { useRoute } from "@react-navigation/native";


export default function Sobre(){

    const route = useRoute();

    return(
        <View style = {styles.container}>
            <Text> Pagina Sobre</Text>
            <Text>{route.params?.nome}</Text>
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