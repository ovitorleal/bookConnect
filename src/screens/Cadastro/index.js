import React from "react";
import { StyleSheet, View, SafeAreaView, Image, Text, Alert, TextInput, ScrollView } from "react-native";
import MeuButton from "../../components/MeuButton";
import MeuInput from "../../components/MeuInput";

function Cadastro({navigation}){
    const cadastrar = () => {
   

        navigation.navigate('Home');
    } ;
    
    
    return(
        <SafeAreaView style={styles.container}>
        <View >  
        <Image style={styles.img} source={'/src/assets/logo.png'}/>
        

        {/* NOME COMPLETO */}

        <Text style={styles.label}>Nome Completo:</Text>
        <TextInput style={styles.input}/>
        
        {/* Data de Nascimento */} 

        <Text style={styles.label}>Data de Nascimento:</Text>
        <TextInput style={styles.input}/>

         {/* E-mail */}   

        <Text style={styles.label}>E-mail:</Text>
        <TextInput style={styles.input}/>

        {/* Senha */}

        <MeuInput
            label="Senha"
            comMascara={true}
        />

        {/* Confirme sua Senha */}

        <MeuInput
            label="Confirme sua senha"
            comMascara={true}
        />

            {/* botão cadastrar */}
        <MeuButton
            value="Cadastrar"
            callback={cadastrar}
        />
    
        </View> 
        </SafeAreaView>
        
    );
}

const styles = StyleSheet.create({ 
    container: {
        backgroundColor: 'black',
        flex: 1,
        alignItems: 'center',
        height: '100vh',
        display: 'flex',
    },
        img: { 
                  
        width: 220 ,
        height: 180,
        resizeMode: 'contain',
        margin: 'auto',
        paddingTop: 200,
        display: 'flex',
        marginBottom: 1,
        marginHorizontal: 'auto',
        
        
    },
    
    label: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'italic',
        marginTop: 10,
        marginBottom: 10,
        fontFamily: 'Courier',
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 5,
        fontSize: 15,
        marginBottom: 10,
        color: 'black',
        fontFamily: 'Courier',
    },
    titulo: {
        fontSize: 40,
        color: 'white',
        fontWeight: 500,
        marginBottom: 15,
        fontFamily: 'Courier',
        justifyContent: 'center',
        padding: 'auto'
    }
  
    
});

export default Cadastro;