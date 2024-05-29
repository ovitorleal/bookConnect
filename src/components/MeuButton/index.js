import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { CORES } from "../../constants/cores";

const MeuButton = (props) => {
    return (
        <TouchableOpacity 
            style={styles.button}
            onPress={props.callback}
        >
            <Text style={styles.text}>{props.value}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems:'center',
        backgroundColor: CORES.COR_PRIMARIA,
        padding: 12,
        width: 320,
        borderRadius: 12,
        marginTop: 20
    },
    text: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 400,
        fontFamily: 'Courier'
    }
})

export default MeuButton;