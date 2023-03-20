import { StyleSheet, View, Text } from 'react-native';

export default function ActivityBox(props) {
    const { style: customStyle, children, excerciseTitle, excerciseSubtitle, categoryTitle } = props
    // console.log(customStyle);
    return (
        <View style={[styles.activityBox, customStyle]}>
            {/* {children} */}
            <View style={styles.excerciseContainer}>
                <Text style={styles.excerciseTitle}>{excerciseTitle}</Text>
                <Text style={styles.excerciseSubtitle}>{excerciseSubtitle}</Text>
            </View>
            <View style={styles.categoryContainer}>
                <Text style={styles.categoryTitle}>{categoryTitle}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    activityBox: {
        width: '100%',
        height: 100,
        borderRadius: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    // ---
    excerciseContainer: {
        flexDirection: 'column',
        marginTop: 21.5,
        marginLeft: 24,
    },
    excerciseTitle: {
        fontFamily: 'DMSansBold', 
        fontSize: 18
    },
    excerciseSubtitle: {
        fontFamily: 'DMSansBold', 
        fontSize: 12,
        color: '#404446'
    },
    // ---
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
        color: '#A05E03',
    }
});
