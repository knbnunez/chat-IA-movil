import {
    Button,
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
    Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react/cjs/react.development";

import StatusProfile from "../components/StatusProfile";

const ChatScreen = () => {
    const [texto, setTexto] = useState("");
    const [msgs, setMsgs] = useState([]);

    return (
        <View style={styles.container}>  
            {/* Barra de estado */}
            <StatusProfile style={{  }}></StatusProfile>

            <KeyboardAvoidingView style={{ flex: 1 }} >
                <ScrollView 
                    style={{ height: Dimensions.get("screen").height * 0.7, width: Dimensions.get("screen").width * 0.85 }}
                    contentContainerStyle={{ gap: 20 }}
                >
                    {msgs.map((msg) => (
                        <View
                            style={{
                                backgroundColor: "#0070F0",
                                paddingVertical: 10,
                                paddingHorizontal: 12,
                                borderTopLeftRadius: 24,
                                borderTopRightRadius: 24,
                                borderBottomLeftRadius: 24,
                            }}
                        >
                            <Text
                                style={{
                                    color: "white",
                                    fontFamily: 'DMSans',
                                    fontSize: 15,
                                    lineHeight: 24,
                                }}
                            >
                                {msg}
                            </Text>
                        </View>
                    ))}
                </ScrollView>

                <View style={{ flexDirection: "row", justifyContent: "center", gap: 10, marginVertical: "1%" }}>
                    <View
                        style={{
                            width: 265,
                            height: 45,
                            borderRadius: 22,
                            borderWidth: 1,
                            borderColor: "#979C9E",
                        }}
                    >
                        <TextInput
                            style={{ width: 260, height: 40, paddingHorizontal: 10 }}
                            value={texto}
                            onChangeText={setTexto}
                            onEndEditing={() => {
                                setMsgs(msgs.concat(texto));
                                setTexto("");
                            }}
                        />
                    </View>
                    <Ionicons.Button
                        name="ios-paper-plane-outline"
                        size={24}
                        color="white"
                        backgroundColor="#303437"
                        borderRadius={24}
                        iconStyle={{ marginLeft: 5, marginTop: 2 }}
                        onPress={() => {
                            setMsgs(msgs.concat(texto));
                            setTexto("");
                            // llamada a la api
                        }}
                    />
                </View>
            </KeyboardAvoidingView>
        </View>
    );
};

export default ChatScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 40,
    },
});