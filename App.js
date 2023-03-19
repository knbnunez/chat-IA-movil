import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import StatBox from './components/StatBox';
import ActivityBox from './components/ActivityBox';

export default function App() {
  const [fontsLoaded] = useFonts({
    'DMSans': require('./assets/fonts/DMSans-Regular.ttf'),
    'DMSansBold': require('./assets/fonts/DMSans-Bold.ttf'),
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Text style={styles.subtitle}>Overview</Text>
      
      <StatBox>
        <View>
          {/* No se está aplicando el estilo al Children, investigar eso... */}
          <View style={styles.iconContainer}></View>
        </View>
        <View>
          <View></View>
        </View>
      </StatBox>

      {/* <ActivityBox style={{ backgroundColor: '#FFF9F0' }} /> */}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Prioridad
    backgroundColor: '#000',
    paddingHorizontal: 24,
  },
  // -----------------------
  title: {
    fontFamily: 'DMSansBold',
    fontSize: 24,
    color: '#fff',
    marginTop: 60,
  },
  subtitle: {
    fontFamily: 'DMSans',
    fontSize: 18,
    color: '#fff',
    marginVertical: 16,
  },
  // -----------------------
  iconContainer: {
    width: 32,
    height: 32,
    backgroundColor: 'Red',
  },
  // -----------------------
  activityBoxContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 30,
    marginHorizontal: 20,
    height: '50%',
  },
});
