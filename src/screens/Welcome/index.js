import React from 'react';
import { StyleSheet, View, Image, Text, } from 'react-native';
import { CORES } from '../../constants/cores';
import MeuButton from "../../components/MeuButton";
import Login from '../Login';



function Welcome({navigation}){

   
    
    const logar = () => {
        navigation.navigate('Login');
    } ;

    const cadastrar = () => {
        navigation.navigate('Cadastro');
    } ;
    
    
    
    return (

        <View style={styles.container}>
            
            
            <Text style={styles.bemVindo}> SEJA BEM VINDO!</Text>
            {/* Logo */}
            <Image style={styles.logo} source={'/src/assets/logo.png'} />
            
            <Text style={styles.titulo}>BookConnect</Text>

            {/* botões */}
            <MeuButton
                value="Entrar"
                callback={logar}
            />

            <MeuButton
                value="Cadastrar"
                callback={cadastrar}
            />


        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        alignItems: 'center',

    },

    bemVindo: {
        color: 'white',
        fontSize: 30,
        paddingTop: 150,
        marginBottom: 1,
        fontFamily: 'Courier',
        fontWeight: 500

    },
   
    logo: {
        width: 200,
        height: 160,
        resizeMode: 'contain',

    },
    titulo: {
        fontSize: 40,
        color: 'white',
        fontWeight: 500,
        marginTop: 1,
        marginBottom: 35,
        fontFamily: 'Courier '
    }


})

export default Welcome;