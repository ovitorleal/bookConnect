import React from "react"
import { Text, TouchableOpacity } from "react-native"
import { livrosDisponiveis } from "../../Biblioteca/livrosDisponiveis.js";
import { View, Image, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { CORES } from "../../constants/cores.js";






export default function Download () {
    return (
        <SafeAreaView style= {styles.container}>

            <Image source={'/src/assets/logo.png'} style={styles.logo} />
           
            
            <Text style= {styles.downloads}>Downloads:</Text>
            <ScrollView  style={styles.carrossel}>
            
               
                {livrosDisponiveis.map((livro, index,) => (
                   <TouchableOpacity>
                   <View key={index} style={styles.livro}>
                        <Image source={livro.capa} style={styles.image} />                        
                        {/* Título do livros e descrição */}                        
                        <Text style ={styles.titulo}>{livro.nome}</Text>
                        <Text style={styles.descricao}>{livro.description}</Text>
                        
                    </View>
                    </TouchableOpacity>
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
        flexDirection: 'row',
        display: 'flex',
        
    },
    image: {
        width: 120,
        height: 150,
        marginBottom: 15,
        
    },
    logo: {
        width: 150,
        height: 110,
        resizeMode: 'contain',
        justifyContent: 'center',
        marginHorizontal: 'auto'
    },
    downloads: {
        marginTop: 0,
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
        fontSize: 12,
        position: 'absolute',
        marginLeft: 150,
        marginBottom: 120
   
    },
    descricao: {
        color: 'grey',
        fontSize: 8,
        textAlign: 'justify',
        paddingLeft: 10,
        fontStyle: 'italic'

    },

});

