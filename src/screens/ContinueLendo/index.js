import React from "react"
import { Text } from "react-native"
import { livrosDisponiveis } from "../../Biblioteca/livrosDisponiveis.js";
import { View, Image, StyleSheet, SafeAreaView, ScrollView } from "react-native";

import * as Progress from 'react-native-progress';



export default function ContinueLendo () {
    return (
        <SafeAreaView style= {styles.container}>

            <Image source={'/src/assets/logo.png'} style={styles.logo} />
            {/*CONTINUE DE ONDE PAROU*/}
            <Text style= {styles.continue}>Continue de onde parou:</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carrossel}>
                {livrosDisponiveis.map((livro, index) => (
                    <View key={index} style={styles.livro}>
                        <Image source={livro.capa} style={styles.image} />
                        {/* Título do livros */}
                        <Text style ={styles.titulo}>{livro.nome}</Text>
                        {/* Porcentagem */}
                        <Progress.Bar style={styles.progess} progress={livro.leitura} width={120} color={'#FF600B'}/>
                    </View>
                ))}
            </ScrollView>

            <Text style= {styles.lidos}>Já lidos:</Text>
            {/* JÁ LIDOS */}

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carrossel}>
                {livrosDisponiveis.map((livro, index) => (
                    <View key={index} style={styles.livro}>
                        <Image source={livro.capa} style={styles.image} />
                        {/* Título do livros */}
                        <Text style ={styles.titulo}>{livro.nome}</Text> 
                         {/* Porcentagem */}
                         <Progress.Bar style={styles.progess} progress={1} width={120} color={'#18ff00'}/>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    )
 
}

const styles = StyleSheet.create({
    container: {
        
        backgroundColor: 'black',
        flex: 1,
        
        
    },
    carrossel: {
        marginTop: 10,
    },
    livro: {
        alignItems: 'center',
        marginRight: 10,
        
    },
    image: {
        width: 120,
        height: 150,
        marginBottom: 5,
        
    },
    logo: {
        width: 150,
        height: 110,
        resizeMode: 'contain',
        justifyContent: 'center',
        marginHorizontal: 'auto',
    },
    continue: {
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 15,
        fontSize: 22,
        fontWeight: '500',
        color: 'white',
        fontFamily: 'Courier'
    },
    lidos: {
        marginTop: 5,
        marginBottom: 10,
        marginLeft: 15,
        fontSize: 22,
        fontWeight: '500',
        color: 'white',
        fontFamily: 'Courier'
    },
    titulo: {
        color: 'white',
        fontSize: 12
    },
    progess: {
        marginTop: 10
    }
});