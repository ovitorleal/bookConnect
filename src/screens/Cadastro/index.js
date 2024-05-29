import React from "react";
import { StyleSheet, View, SafeAreaView, Image, Text, Alert, TextInput, ScrollView } from "react-native";
import MeuButton from "../../components/MeuButton";

function Cadastro({navigation}){
    const cadastrar = () => {
   

        navigation.navigate('Cadastro');
    } ;
    
    
    return(
        <SafeAreaView style={styles.container}>
        <View >  
        <Image style={styles.img} source={require('../../../assets/logo.png')}/>
        

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

        <Text style={styles.label}>Senha:</Text>
        <TextInput style={styles.input}/>

        {/* Confirme sua Senha */}

        <Text style={styles.label}>Confirme sua Senha:</Text>
        <TextInput style={styles.input}/>
    
        <MeuButton style={MeuButton}
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
        marginBottom: 1
        
        
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