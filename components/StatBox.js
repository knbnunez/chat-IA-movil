import { StyleSheet, View, Text } from 'react-native';

export default function StatBox(props) {
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
}

const styles = StyleSheet.create({
  statBox: {
    width: 98.33,
    height: 118,
    backgroundColor: '#fff',
    borderRadius: 24,
    flexDirection: 'column', 
    justifyContent: 'space-between', 
    padding: 18,
    shadowColor: "#FFF",
    shadowOffset: { width: 2.5, height: 1.5 },
    shadowOpacity: 0.2,
    shadowRadius: 2.5,
  },
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
