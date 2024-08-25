import React from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';
import {Screen} from "../../components/Screen";

export default function About() {

    const sections = [
        {
            subtitle: 'Resumen',
            data: ['Esta aplicación ofrece una lista curada de los juegos mejor valorados en Metacritic. Utilizando los datos de una API, proporciona a los usuarios una visión integral de los mejores juegos disponibles.']
        },
        {
            subtitle: 'Características',
            data: [
                'Información del Juego: \nLa pantalla principal muestra el título del juego, la puntuación, la imagen y una breve descripción en un formato de tarjeta.\n',
                'Vista Detallada: \nToca cualquier tarjeta de juego para acceder a más detalles, incluyendo una descripción extendida, título, imagen y puntuación. Se añadirán datos adicionales en futuras actualizaciones.\n',
                'Navegación Fluida: \nLa aplicación utiliza las pestañas de Expo de expo-router para una navegación sin interrupciones, respaldada por React Navigation para un rendimiento óptimo.\n'
            ]
        },
        {
            subtitle: 'Tecnologías Utilizadas',
            data: [
                'React Native',
                'Expo',
                'React Navigation',
                'NativeWind\n',
            ]
        },
        {
            subtitle: 'Mejoras Futuras',
            data: ['Se planean futuras mejoras, incluyendo datos adicionales de juegos y una mayor interactividad para enriquecer la experiencia del usuario.']
        },
        {
            subtitle: 'Repositorio',
            data: ['El código fuente de este proyecto está disponible en GitHub.']
        },
    ];

    return (
        <Screen>
            <Text style={styles.title}>About this project</Text>
            <SectionList
                sections={sections}
                keyExtractor={(item, index) => item + index}
                renderItem={({item, section}) => {
                    if (section.subtitle === 'Características' || section.subtitle === 'Tecnologías Utilizadas') {
                        return (
                            <View>
                                <Text style={styles.listItemDot}>
                                    {`\u2022 ${item}`}
                                </Text>
                            </View>
                        );
                    } else {
                        return (
                            <View style={styles.listItem}>
                                <Text style={styles.textContent}>{item}</Text>
                            </View>
                        );
                    }
                }}
                renderSectionHeader={({section}) => (<Text style={styles.subtitle}>{section.subtitle}</Text>)}
                stickySectionHeadersEnabled={false}
                contentContainerStyle={styles.containerStyle}
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    title: {fontSize: 34, color: '#FFBD3F', fontWeight: 'bold', textAlign: 'center', paddingTop: 10},
    subtitle: {fontSize: 26, color: '#FFBD3F', fontWeight: '600', paddingBottom: 10},
    textContent: {fontSize: 18, color: '#fff',},
    listItemDot: {fontSize: 18, paddingLeft: 15 , color: '#fff'},
    listItem: {paddingLeft: 15, paddingBottom: 10,},
    containerStyle: {padding: 20}
})
