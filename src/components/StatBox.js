import { StyleSheet, View, Text, Dimensions } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const StatBox = (props) => {
  const { 
    style: customStyle, 
    text,
    subText,
    iconName
  } = props

  return (
    <View style={[styles.statBox, customStyle]}>
      <View style={styles.iconContainer}>
        <Ionicons name={iconName} size={20} color="#0070F0" />
      </View>
      <View>
        <Text style={styles.text}>{text}</Text>
        <Text style={styles.subText}>{subText}</Text>
      </View>
    </View>
  );
};

export default StatBox;

const styles = StyleSheet.create({
  statBox: {
    // width: 104,
    width: windowWidth * 0.4,
    // height: 120,
    height: windowHeight * 0.16,
    backgroundColor: '#fff',
    borderRadius: 24,
    flexDirection: 'column', 
    justifyContent: 'space-between', 
    padding: 18,
    shadowColor: "#000",
    // shadowColor: "#FFF", // Darkmode??
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 2,
  },
  // Falta hacer responsive esto
  iconContainer: {
    width: 32,
    height: 32,
    backgroundColor: '#F2F8FF',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'DMSansBold',
    fontSize: 14,
  },
  subText: {
    fontFamily: 'DMSansBold',
    fontSize: 12,
    color: '#72777A',
  },
});

