import React from "react"
import { Text } from "react-native"
import { livrosDisponiveis } from "../../Biblioteca/livrosDisponiveis.js";
import { View, Image, StyleSheet, SafeAreaView, ScrollView, FlatList } from "react-native";





export default function Download () {
    return (
        <SafeAreaView style= {styles.container}>

            <Image source={'/src/assets/logo.png'} style={styles.logo} />
            {/*BAIXADOS*/}
            <Text style= {styles.continue}>Downloads:</Text>
            <ScrollView  style={styles.carrossel}>
                {livrosDisponiveis.map((livro, index,) => (
                    <View key={index} style={styles.livro}>
                        <Image source={livro.capa} style={styles.image} />
                        {/* Título do livros */}
                        <Text style ={styles.titulo}>{livro.nome}</Text>
                        <Text style={styles.descricao}>{livro.description}</Text>
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
        alignItems: 'left',
        marginRight: 10,
        flexDirection: 'row'
        
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
        marginHorizontal: 'auto'
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
    descricao: {
        color: 'white'
    }
});

