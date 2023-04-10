import { StyleSheet, View, Text, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const StatBox = (props) => {
  const { 
    style: customStyle, 
    children,
    // source,
    // sourceStyle, 
    boxText,
    boxSubtext,
  } = props
  // console.log({source});
  // console.log({sourceStyle});

  

  return (
    <View style={[styles.statBox, customStyle]}>
      <View style={styles.iconContainer}>
        {children}
        {/* <Image
          source={require({source})}
          // style={sourceStyle}
        /> */}
      </View>
      <View>
        <Text style={styles.boxText}>{boxText}</Text>
        <Text style={styles.boxSubtext}>{boxSubtext}</Text>
      </View>
    </View>
  );
};

export default StatBox;

const styles = StyleSheet.create({
  statBox: {
    // width: 104,
    width: windowWidth * 0.27,
    // height: 120,
    height: windowHeight * 0.16,
    backgroundColor: '#fff',
    borderRadius: 24,
    flexDirection: 'column', 
    justifyContent: 'space-between', 
    padding: 18,
    // shadowColor: "#000",
    shadowColor: "#FFF",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 12,
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
  boxText: {
    fontFamily: 'DMSansBold',
    fontSize: 14,
  },
  boxSubtext: {
    fontFamily: 'DMSansBold',
    fontSize: 12,
    color: '#72777A',
  },
});

