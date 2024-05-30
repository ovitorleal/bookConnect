import React from "react"
import { livrosDisponiveis } from "../../Biblioteca/livrosDisponiveis.js";
import { Text, View, Image, StyleSheet, SafeAreaView, ScrollView } from "react-native"

export default function Home () {
    return (
        <SafeAreaView style= {styles.container}>
            <Text>Estou na pagina home</Text>

            <Text style= {styles.recomendados}>Recomendados</Text>
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
        marginHorizontal: 20,
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
        marginBottom: 10,
    },
    recomendados: {
        marginTop: 30,
        marginBottom: 10,
        fontSize: 18,
        fontWeight: 'bold',
    },
});