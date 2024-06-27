import React from "react";
import { SafeAreaView, TextInput, StyleSheet, Text } from "react-native";

const MeuInput = (props) =>{

    return (
        <SafeAreaView>
            <Text style={styles.label}>{ props.label }</Text>
            <TextInput
            style={ styles.input }
            placeholder={ props.placeHolder }
            secureTextEntry={ props.comMascara }/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    input:{
        borderWidth: 1,
        marginBottom: 15,
        marginTop: 3,
        padding: 10,
        width: 320,
        height: 36,
        borderRadius: 12,
        color: 'grey',
        fontSize: 15,
        backgroundColor: 'white',
        fontStyle: 'italic'
    },
    label:{
        color: 'white',
        fontSize: 15,
        fontFamily:'Courier',
        marginBottom: 5,
    }
});

export default MeuInput;