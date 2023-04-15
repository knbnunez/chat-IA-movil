import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

import StatBox from './../components/StatBox';
import ActivityBox from './../components/ActivityBox';
import { ROUTES } from './../../routes';

const statBoxData = [

];

const HomeScreen = () => {
  const navigation = useNavigation();
  const _handlePress = () => navigation.navigate(ROUTES.CHAT);
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicio</Text>
      <Text style={styles.subtitle}>Resumen</Text>

      <View style={styles.statBoxContainer}>
        <StatBox 
          // iconComponent='IonIcons' // No se puede, debe ser el componente en sí, porque el mismo retorna una funición, no es solamente un nombre.
          iconName='chatbubbles'
          boxText='3.950'
          boxSubtext='Rtas. gen.'
        >
          {/* <Ionicons 
            name="chatbubbles" 
            size={20} 
            color="#0070F0" 
          /> */}
        </StatBox>
        <StatBox 
          iconName='image'
          boxText='1.000' 
          boxSubtext='Img. gen.'
        />
        <StatBox 
          iconName='mic'
          boxText='15' 
          boxSubtext='Trad. real.'
        />
      </View>

      <View style={styles.activityBoxContainer}>  
        <Pressable onPressIn={_handlePress}>
          <ActivityBox 
            style={{backgroundColor: '#FFF9F0'}} 
            excerciseTitle='Canal de texto' 
            excerciseSubtitle='Chatea con la IA' 
            categoryTitle='CHATEÁ'
          />
        </Pressable>
        <ActivityBox 
          style={{backgroundColor: '#F0F0FF'}} 
          excerciseTitle='Canal de imágen' 
          excerciseSubtitle='Imágenes desde en imágenes' 
          categoryTitle='CREÁ'
        />
        <ActivityBox 
          style={{backgroundColor: '#FFF0FD'}} 
          excerciseTitle='Canal de voz' 
          excerciseSubtitle='Convertí voz a texto' 
          categoryTitle='HABLÁ'
        />        
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
