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
      <Text style={styles.titleHome}>Home</Text>
      <Text style={styles.titleOverview}>Overview</Text>

      <View style={styles.containerStatBox}>
        <StatBox>
          <View>
            <View style={styles.containerIcon}>
              
            </View>  
          </View>
          
          <View>
            <View>
            
            </View>  
          </View>
        </StatBox>
        {/* <StatBox />
        <StatBox /> */}
      </View>

      <View style={styles.containerActivityBox}>
        {/* <ActivityBox style={{ backgroundColor: '#FFF9F0' }} />
        <ActivityBox style={{ backgroundColor: '#F0F0FF' }} />
        <ActivityBox style={{ backgroundColor: '#FFF0FD' }} /> */}
      </View>

      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Prioridad
    backgroundColor: '#000',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingHorizontal: 24,
  },
  titleHome: {
    fontFamily: 'DMSansBold',
    fontSize: 24,
    color: '#fff',
    marginTop: 60,
  },
  titleOverview: {
    fontFamily: 'DMSans',
    fontSize: 18,
    color: '#fff',
    // marginTop: 20,
    // marginHorizontal: 20,
    marginVertical: 16,    
  },
  containerStatBox: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // marginHorizontal: 20,
    // marginTop: 16,
    /* Auto layout */

    // display: flex,
    // flexDirection: column,
    // justifyContent: center,
    // alignItems: flex-start,
    // padding: 18,
    // gap: 12,

    width: 98.33,
    height: 118,

    backgroundColor: 'Red',
    // boxShadow: '4 6 40 rgba(0, 0, 0, 0.05)',
    borderRadius: 24,

    /* Inside auto layout */

    // flex: none,
    // order: 0,
    // flexGrow: 1,
  },
  containerIcon: {
    width: 32,
    height: 32,
    backgroundColor: 'Red',
  },

  containerActivityBox: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 30,
    marginHorizontal: 20,
    height: '50%',
  },
});
