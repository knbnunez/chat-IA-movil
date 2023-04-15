import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

import StatBox from './../components/StatBox';
import ActivityBox from './../components/ActivityBox';
import { ROUTES } from './../../routes';

const statBoxData = [
  // Para poder contener los datos que se envían como parámetros al componente Statbox, se crean objetos con los mismos
  {
    iconName: "chatbubbles",
    boxText: "3.950",
    boxSubtext: "Rtas. gen."
  },
  {
    iconName: "image",
    boxText: "1.000",
    boxSubtext: "Img. gen."
  },
  {
    iconName: "mic",
    boxText: "15",
    boxSubtext: "Trad. real."
  },
];

const activityBoxData = [
  {
    // Al crear style como un objeto de objetos, me permite agregarle varios atributos
    style: {
      backgroundColor: "#FFF9F0"
    }, 
    excerciseTitle: "Canal de texto", 
    excerciseSubtitle: "Chatea con la IA", 
    categoryTitle: "CHATEÁ"
  },
  {
    style: {
      backgroundColor: "#F0F0FF"
    }, 
    excerciseTitle: "Canal de imágen", 
    excerciseSubtitle: "Imágenes desde en imágenes",
    categoryTitle: "CREÁ"
  },
  {
    style: {
      backgroundColor: "#FFF0FD"
    },
    excerciseTitle: "Canal de voz", 
    excerciseSubtitle: "Convertí voz a texto",
    categoryTitle: "HABLÁ"
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();
  const _handlePress = () => navigation.navigate(ROUTES.CHAT);
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicio</Text>
      <Text style={styles.subtitle}>Resumen</Text>

      <View style={styles.statBoxContainer}>
        {/* Debemos retornar los componentes para poder visualizarlos, por eso se elige usar map */}
        {statBoxData.map((data) => <StatBox {...data}/>)} 
        {/* Como entra todo en una línea de código, no es necesario agregar los corchetes de inicio y fin + return */}
      </View>

      <View style={styles.activityBoxContainer}>  
        {/* <Pressable onPressIn={_handlePress}>
          <ActivityBox 
            style={{backgroundColor: '#FFF9F0'}} 
            excerciseTitle='Canal de texto' 
            excerciseSubtitle='Chatea con la IA' 
            categoryTitle='CHATEÁ'
          />
        </Pressable> */}
        {/* Añadir pressable */}
        {activityBoxData.map((data) => <ActivityBox {...data}/>)}
      </View>
    </View>
  );
}; 

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Se establece el tamaño al máx en relación con su contenedor, en este caso, container principal: toda la pantalla
    flexDirection: 'column',
    backgroundColor: '#191A1B', // DarkMode?
    // backgroundColor: '#FFF',
    paddingHorizontal: 24,
  },
  title: {
    fontFamily: 'DMSansBold',
    fontSize: 24,
    color: '#fff', //DarkMode?
    // color: '#000',
    marginTop: 60,
  },
  subtitle: {
    fontFamily: 'DMSans',
    fontSize: 18,
    color: '#fff', //DarkMode?
    // color: '#000',
    marginVertical: 16,
  },  
  statBoxContainer: {
    // maxHeight: '18%',
    flexDirection: 'row', 
    // flex: 1,
    justifyContent: 'space-between',
    // backgroundColor: 'green',
    backgroundColor: '#191A1B', 
  },
  activityBoxContainer: {
    // height: '50%',
    flexDirection: 'column', // Por defecto es column (React Native -> Mobile)
    flex: 1, // Expando al max en relación con su contenedor
    justifyContent: 'space-around',
    marginVertical: 12,
    // marginBottom: 40,
    // backgroundColor: 'blue',
    backgroundColor: '#191A1B', 
  },
});
