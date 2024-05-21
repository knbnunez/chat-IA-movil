import { StyleSheet, View, Text } from 'react-native';

const ActivityBox = (props) => {
    const { style: customStyle, children, excerciseTitle, excerciseSubtitle, categoryTitle } = props
    // console.log(customStyle);
    const backgroundColorStyle = customStyle.backgroundColor ? { backgroundColor: customStyle.backgroundColor } : {};
    const textColorStyle = customStyle.textColor ? { color: customStyle.textColor } : {};

    return (
        <View style={[styles.activityBox, backgroundColorStyle]}>
            {/* {children} */}
            <View style={styles.excerciseContainer}>
                <Text style={styles.excerciseTitle}>{excerciseTitle}</Text>
                <Text style={styles.excerciseSubtitle}>{excerciseSubtitle}</Text>
            </View>
            <View style={styles.categoryContainer}>
                <Text style={[styles.categoryTitle, textColorStyle]}>{categoryTitle.toUpperCase()}</Text>
            </View>
        </View>
    );
};

export default ActivityBox;

const styles = StyleSheet.create({

    // TODO: HACERLO RESPONSIVE
    
    activityBox: {
        // width: '100%',
        // height: '30%',
        width: '100%',
        height: 93,
        borderRadius: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // elevation: 1,
    },
    excerciseContainer: {
        flexDirection: 'column',
        marginTop: 21.5,
        marginLeft: 24,
    },
    excerciseTitle: {
        fontFamily: 'DMSansBold', 
        fontSize: 18,
    },
    excerciseSubtitle: {
        fontFamily: 'DMSansBold', 
        fontSize: 12,
        color: '#404446'
    },
    categoryContainer: {
        width: 71,
        height: 27, 
        backgroundColor: '#FFF',
        borderRadius: 48,
        alignItems: 'center',
        justifyContent: 'center', 
        marginTop: 20,
        marginRight: 57,
    },
    categoryTitle: {
        fontFamily: 'DMSansBold', 
        fontSize: 10,
        // color: '#A05E03',
        textTransform: 'uppercase'
    }
});

