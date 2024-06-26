import React from "react"
import { Text } from "react-native"



import { View, Image, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { CORES } from "../../constants/cores";

import { SimpleLineIcons } from "@expo/vector-icons";



export default function Configuracoes() {
    return (
        <SafeAreaView style={styles.container}>

            <Image source={'/src/assets/logo.png'} style={styles.logo} />
            <View style={styles.botoes}>
            <TouchableOpacity style={styles.botao}>
                {/* conteudo do botão */}
                <View style={styles.content}>
                    {/* usando simpleLineIcons e estilizando */}
                    <SimpleLineIcons
                        style={{ marginRight: 12 }}
                        size={24}
                        color="#fff"
                        name="bell"
                    />
                    <Text style={styles.titulo}>Notificações</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao}>               
                <View style={styles.content}>                   
                    <SimpleLineIcons
                        style={{ marginRight: 12 }}
                        size={24}
                        color="#fff"
                        name="arrow-down-circle"
                    />
                    <Text style={styles.titulo}>Downloads</Text>                    
                </View>
            </TouchableOpacity>


            <TouchableOpacity style={styles.botao}>               
                <View style={styles.content}>                   
                    <SimpleLineIcons
                        style={{ marginRight: 12 }}
                        size={24}
                        color="#fff"
                        name="user"
                    />
                    <Text style={styles.titulo}>Usuário</Text>                    
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao}>                
                <View style={styles.content}>                    
                    <SimpleLineIcons
                        style={{ marginRight: 12 }}
                        size={24}
                        color="#fff"
                        name="earphones-alt"
                    />
                    <Text style={styles.titulo}>Ajuda</Text>                   
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao}>                
                <View style={styles.content}>                    
                    <SimpleLineIcons
                        style={{ marginRight: 12 }}
                        size={24}
                        color="#fff"
                        name="logout"
                    />
                    <Text style={styles.titulo}>Sair</Text>                   
                </View>
            </TouchableOpacity>
            </View>


        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {

        backgroundColor: 'black',
        flex: 1,


    },
    botoes:{
        flex: 1,
        marginTop: 50
        
    },
    logo: {
        width: 190,
        height: 150,
        marginHorizontal: 'auto',
        resizeMode: 'contain',
        justifyContent: 'center',
        
    },
    botao: {
        backgroundColor: CORES.COR_PRIMARIA,
        height: 50,
        borderRadius: 12,
        width: '90%',
        alignContent: "center",
        justifyContent: "center",
        marginHorizontal: 20,
        marginVertical: 10

    },

    titulo: {
        fontSize: 18,
        color: 'white',
        fontFamily: 'Courier',
        alignContent: 'center',
        marginLeft: 40


    },
    content: {
        flexDirection: "row",
        marginLeft: 40,




    }



});