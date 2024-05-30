import React from 'react';
//NAO CONSIGO APAGAR ESSA PASTA, PODE APAGAR, ELA É INUTIL


import { View, Image, Text, StyleSheet } from 'react-native';

function Livro({ capa, nome }) {
    return (
        <View style={styles.container}>
            <Image source={capa} style={styles.image} />
            <Text style={styles.text}>{nome}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    
});

export default Livro;