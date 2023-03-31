import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import { useFonts } from 'expo-font';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome } from '@expo/vector-icons'; 
import StatBox from './../components/StatBox';
import ActivityBox from './../components/ActivityBox';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../routes';

const HomeScreen = () => {
  const [fontsLoaded] = useFonts({
    'DMSans': require('./../assets/fonts/DMSans-Regular.ttf'),
    'DMSansBold': require('./../assets/fonts/DMSans-Bold.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }

  // const [count, setCount] = useState(0);
  // setInterval(() => {
  //   if (count < 9999) setCount(count + 1);
  //   else setCount(3000);
  // }, 1000);

  const navigation = useNavigation();
  const _handlePress = () => {
    navigation.navigate(ROUTES.CHAT)
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicio</Text>
      <Text style={styles.subtitle}>Resumen</Text>

      <View style={styles.statBoxContainer}>
        
        <StatBox 
          // style={styles.statBox} 
          // source='./assets/images/Fueguito.svg' # No se pudo mandarle el source para el string del require (del Image)
          // sourceStyle='{height: 16, width: 13}'
          boxText='3.950'
          boxSubtext='Rtas. gen.' // 3.950
        >
          <Ionicons name="chatbubbles" size={20} color="#0070F0" />
        </StatBox>
        <StatBox boxText='1.000' boxSubtext='Img. gen.'>
          {/* <Image source={require("./assets/images/imagen.png")} style={{ width: 15, height: 13 }}/> */}
          <Ionicons name="image" size={20} color="#0070F0" />
        </StatBox>
        <StatBox boxText='15' boxSubtext='Trad. real.'>
          <FontAwesome name="microphone" size={20} color="#0070F0" />
        </StatBox>
      </View>

      <View style={styles.activityBoxContainer}>  
        <Pressable onPressIn={_handlePress}>
          <ActivityBox style={{backgroundColor: '#FFF9F0'}} excerciseTitle='Canal de texto' excerciseSubtitle='Chatea con la IA' categoryTitle='CHATEÁ'/>
        </Pressable>
        <ActivityBox style={{backgroundColor: '#F0F0FF'}} excerciseTitle='Canal de imágen' excerciseSubtitle='Imágenes desde en imágenes' categoryTitle='CREÁ'/>
        <ActivityBox style={{backgroundColor: '#FFF0FD'}} excerciseTitle='Canal de voz' excerciseSubtitle='Convertí voz a texto' categoryTitle='HABLÁ'/>        
      </View>

    </View>
  );
}; 

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Se establece el tamaño al máx en relación con su contenedor, en este caso, container principal: toda la pantalla
    backgroundColor: '#000', // DarkMode?
    // backgroundColor: '#FFF',
    paddingHorizontal: 24,
  },
  // -----------------------
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
  // -----------------------
  statBoxContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    // backgroundColor: 'green',
  },
  // -----------------------
  // TODO: Corregir margin derecho...
  activityBoxContainer: {
    flexDirection: 'column', // Por defecto es column (React Native -> Mobile)
    flex: 1, // Expando al max en relación con su contenedor
    justifyContent: 'space-around',
    marginVertical: 12,
    marginBottom: 40,
    // backgroundColor: 'blue',
  },
});
