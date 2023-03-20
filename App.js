import { StyleSheet, Text, View, Image } from 'react-native';
import { useFonts } from 'expo-font';
import StatBox from './components/StatBox';
import ActivityBox from './components/ActivityBox';
import NavBar from './components/NavBar';

export default function App() {
  const [fontsLoaded] = useFonts({
    'DMSans': require('./assets/fonts/DMSans-Regular.ttf'),
    'DMSansBold': require('./assets/fonts/DMSans-Bold.ttf'),
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Text style={styles.subtitle}>Overview</Text>

      <View style={styles.statBoxContainer}>
        
        <StatBox 
          // style={styles.statBox} 
          // source='./assets/images/Fueguito.svg' # No se pudo mandarle el source para el string del require (del Image)
          // sourceStyle='{height: 16, width: 13}'
          boxText='3.950'
          boxSubtext='Rtas. gen.'
        >
          <Image
            source={require("./assets/images/Fueguito.png")}
            style={{ height: 16, width: 13 }}
          />
        </StatBox>
        <StatBox boxText='3h 14min' boxSubtext='Total Time'>
          <Image source={require("./assets/images/Relojito.png")} style={{ height: 16, width: 16 }}/>
        </StatBox>
        <StatBox boxText='15' boxSubtext='Exercises'>
          <Image source={require("./assets/images/Pesita.png")} style={{ height: 20, width: 20 }}/>
        </StatBox>
      </View>

      <View style={styles.activityBoxContainer}>  
        <ActivityBox style={{backgroundColor: '#FFF9F0'}} excerciseTitle='Push-ups' excerciseSubtitle='Tomorrow at 08:00 AM' categoryTitle='WARM-UP'/>
        <ActivityBox style={{backgroundColor: '#F0F0FF'}} excerciseTitle='Workout' excerciseSubtitle='Today at 2:45 PM' categoryTitle='FITNESS'/>
        <ActivityBox style={{backgroundColor: '#FFF0FD'}} excerciseTitle='Workout' excerciseSubtitle='Today at 2:45 PM' categoryTitle='FITNESS'/>        
      </View>

      <NavBar customStyle={{}}></NavBar>

    </View>
  );
}

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
    backgroundColor: 'green',
  },
  // -----------------------
  // TODO: Corregir margin derecho...
  activityBoxContainer: {
    flexDirection: 'column', // Por defecto es column (React Native -> Mobile)
    flex: 1, // Expando al max en relación con su contenedor
    justifyContent: 'space-around',
    marginVertical: 12,
    marginBottom: 100,
    backgroundColor: 'blue',
  },
});
