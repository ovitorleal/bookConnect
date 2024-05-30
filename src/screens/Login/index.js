import React from "react";
import { StyleSheet, View, Text, Alert, Image } from "react-native"
import MeuInput from "../../components/MeuInput";
import { CORES } from "../../constants/cores";
import MeuButton from "../../components/MeuButton";

function Login({navigation}){

    const logar = () => {
   

        navigation.navigate('Home');
    } ;


    return(
       <View style={styles.boxLogin}>
        <Image source={'/src/assets/logo.png'} style={styles.logo} />
        <Text style={styles.titulo}>BookConnect</Text>

        
        <MeuInput
            label="E-mail"
            placeHolder="exemplo@exemplo.com"
            comMascara={false}
        />

        <MeuInput
            label="Senha"
            placeHolder="Digite sua senha"
            comMascara={true}
        />


        <MeuButton
            value="Entrar"
            callback={logar}
        />

       </View>
    );
}

const styles = StyleSheet.create({
    boxLogin: {
        backgroundColor: 'black',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titulo: {
        fontSize: 40,
        color: 'white',
        fontWeight: 500,
        marginBottom: 35,
        fontFamily:'Courier'
    },
    esquceuSenha:{
        fontSize: 14,
        color: CORES.COR_SECUNDARIA,
        fontFamily: 'Courier',
        marginBottom: 10,
        paddingLeft: 150,
        textDecorationLine: 'underline'
    },
    novoUsuario: {
        fontSize: 14,
        color: CORES.COR_SECUNDARIA,
        fontFamily: 'Courier',
        marginBottom: 15,
        paddingLeft: 190,
        textDecorationLine: 'underline'
    },
    logo: {
        width: 200,
        height: 160,
        resizeMode: 'contain',

    },

});

export default Login;