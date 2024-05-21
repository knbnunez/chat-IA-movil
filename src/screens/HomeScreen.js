import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React, { useState, useEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation, useIsFocused } from '@react-navigation/native';

import StatBox from '../components/StatBox';
import ActivityBox from '../components/ActivityBox';
import { ROUTES } from '../../routes';
import { getResponsesToBotCount } from "../services/analitycStorageService";

let statBoxData = [
  // Para poder contener los datos que se envían como parámetros al componente Statbox, se crean objetos con los mismos
  {
    iconName: "chatbubbles",
    // text: "3.950",
    subText: "Rtas. gen."
  },
  {
    iconName: "image",
    // text: "1.000",
    subText: "Img. gen."
  },
];

const activityBoxData = [
  // Chat
  {
    // Al crear style como un objeto de objetos, me permite agregarle varios atributos
    style: {
      backgroundColor: "#FFF9F0",
      textColor: "#a76c18"
    },
    excerciseTitle: "Canal de texto",
    excerciseSubtitle: "Chatea con la IA",
    categoryTitle: "CHATEÁ",
    // RUTEO
    routeName: ROUTES.CHAT
  },
  // Imagen
  {
    style: {
      backgroundColor: "#F0F0FF",
      textColor: "#5a5acc"
    },
    excerciseTitle: "Canal de imágen",
    excerciseSubtitle: "Imágenes desde en imágenes",
    categoryTitle: "CREÁ",
    routeName: ROUTES.IMAGE
  },
  // Sala común
  {
    style: {
      backgroundColor: "#e8ffea",
      textColor: "#55cb59"
    },
    excerciseTitle: "Sala común",
    excerciseSubtitle: "Sala común de chat",
    categoryTitle: "COMPARTÍ",
    routeName: ROUTES.COMMON
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [textData, setTextData] = useState([]);

  const navigateTo = (route) => () => navigation.navigate(route); // Se hace un doble llamado para que navigateTo almacene la definición de una función y no lo que retorna en sí, por lo que, recién cuando se presiona el botón, es cuando se llama a la función y se busca qué es lo que retorna. Haciendo la traza se entiende mejor...

  const getNewCountValue = async () => {
    // Está bien que ambos sean await, pero hay que tener cuidado porque pueden llegar a tardar uno más que el otro, entonces:
    const textCount = await getResponsesToBotCount("text");
    const imageCount = await getResponsesToBotCount("image");
    setTextData([textCount, imageCount, 0]); // La solución sería usar distintos States, ahora no lo cambio porque ya lo pensé como una iteración abajo, pero si hubiera que procesar más cosas, habría que tener en cuenta el comentario...
  }

  useEffect(() => {
    if (isFocused) {
      getNewCountValue();
    }
  }, [isFocused])


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicio</Text>
      <Text style={styles.subtitle}>Resumen</Text>

      <View style={styles.statBoxContainer}>
        { statBoxData.map((data, idx) => <StatBox {...data} text={textData.length !== 0 ? textData[idx] : "0"} key={data.iconName} />) }
      </View>

      <View style={styles.activityBoxContainer}>
        {activityBoxData.map((data) => {
          return (
            <Pressable onPressIn={navigateTo(data.routeName)} key={data.excerciseTitle}>
              <ActivityBox {...data} key={data.excerciseTitle} />
            </Pressable>
          )
        })}
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Se establece el tamaño al máx en relación con su contenedor, en este caso, container principal: toda la pantalla
    flexDirection: 'column',
    // backgroundColor: '#191A1B', // DarkMode?
    paddingHorizontal: 24,
    paddingTop: 40,
    backgroundColor: '#fff'
  },
  title: {
    fontFamily: 'DMSansBold',
    fontSize: 25,
    // color: '#fff', //DarkMode?
    // color: '#000',
    // marginTop: 60,
  },
  subtitle: {
    fontFamily: 'DMSans',
    fontSize: 19,
    // color: '#fff', //DarkMode?
    // color: '#000',
    marginVertical: 13,
  },
  statBoxContainer: {
    // maxHeight: '18%',
    flexDirection: 'row',
    // flex: 1,
    justifyContent: 'space-between',
    // backgroundColor: 'green',
    // backgroundColor: '#191A1B', // Darkmode??
    marginTop: "6%",
  },
  activityBoxContainer: {
    // height: '50%',
    flexDirection: 'column', // Por defecto es column (React Native -> Mobile)
    flex: 1, // Expando al max en relación con su contenedor
    justifyContent: 'space-between',
    marginTop: 15,
    marginBottom: "30%",
    // marginVertical: "20%",
    // backgroundColor: 'blue',
    // backgroundColor: '#191A1B', // Darkmode?
  },
});
