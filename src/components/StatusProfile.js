import { Text, View, Dimensions, StyleSheet, Pressable, } from "react-native";
import { Ionicons, FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StatusProfile = ({style: customStyle, title}) => {
    const navigation = useNavigation();
    
    return (
        <View style={[styles.container, customStyle]}>
            {/* <View style={{ height: "100%", width: (windowWidth * 0.11), marginLeft: "-2.5%" }}>
                <Pressable onPressIn={() => navigation.goBackck()}>
                    <Ionicons name="md-arrow-back-circle-outline" size={44} color="#72777A" />
                </Pressable>
            </View> */}
            <View style={{ flexDirection: "row", height: "100%", width: windowWidth, alignItems: "center", justifyContent: "center" }}>
                <View style={{ marginLeft: "-28%", marginRight: "6%" }}>
                    {/* <FontAwesome5 name="robot" size={24} color="black" /> */}
                    <MaterialCommunityIcons name="robot-excited-outline" size={31} color="black" />
                </View>
                <View>
                    <Text style={{ fontFamily: 'DMSansBold', fontSize: 14, color: "#202325", }}>{title}</Text>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                        <View style={{ width: 8, height: 8, backgroundColor: "#7DDE86", borderRadius: 4, }} />
                        <Text style={{ fontFamily: 'DMSans', fontSize: 12, color: "#72777A", }}>
                            Siempre activo
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        paddingHorizontal: 24,
        alignItems: "center",
        gap: 20,
        zIndex: 2,
        marginBottom: 20,
    },
});