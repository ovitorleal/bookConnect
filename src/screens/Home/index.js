import React from "react"
import { livrosDisponiveis } from "../../Biblioteca/livrosDisponiveis.js";
import { Text, View, Image, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { Container } from "../../styles/style-comum.js";

export default function Home () {
    return (
        <SafeAreaView style= {styles.container}>

            <Image source={'/src/assets/logo.png'} style={styles.logo} />
            {/* RECOMENDADOS */}
            <Text style= {styles.recomendados}>Recomendados</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carrossel}>
                {livrosDisponiveis.map((livro, index) => (
                    <View key={index} style={styles.livro}>
                        <Image source={livro.capa} style={styles.image} />
                        <Text>{livro.nome}</Text>
                    </View>
                ))}
            </ScrollView>

            {/* EM ALTA */}

            <Text style= {styles.emAlta}>Em alta</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carrossel}>
                {livrosDisponiveis.map((livro, index) => (
                    <View key={index} style={styles.livro}>
                        <Image source={livro.capa} style={styles.image} />
                        <Text>{livro.nome}</Text>
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
        width: 200,
        height: 160,
        resizeMode: 'contain',
        justifyContent: 'center',
        marginLeft: 100
    },
    recomendados: {
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 15,
        fontSize: 18,
        fontWeight: '500',
        color: 'white',
        fontFamily: 'Courier'
    },
    emAlta: {
        marginTop: 5,
        marginBottom: 10,
        marginLeft: 15,
        fontSize: 18,
        fontWeight: '500',
        color: 'white',
        fontFamily: 'Courier'
    },
});