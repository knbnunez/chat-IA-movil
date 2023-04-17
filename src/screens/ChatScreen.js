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
import UserMsgBubble from '../components/UserMsgBubble';
import IAMsgBubble from '../components/IAMsgBubble';

const ChatScreen = () => {
    const [texto, setTexto] = useState(""); // IMPORTANTE: setState = Admite un valor o una función
    const [msgs, setMsgs] = useState([]);

    const _AddUserMsg = () => {
        setMsgs(msgs.concat(texto)); // Se añade al array
        setTexto(""); // Y se resetea el texto de input
    }

    return (
        <View style={styles.container}>  
            {/* Barra de estado */}
            <StatusProfile style={{  }}></StatusProfile>

            <KeyboardAvoidingView style={{ flex: 1 }} >
                <ScrollView 
                    style={{ height: Dimensions.get("screen").height * 0.7, width: Dimensions.get("screen").width, paddingHorizontal: "7%" }}
                    contentContainerStyle={{ gap: 20 }}
                >
                    {msgs.map((msg, idx) => (
                        <>
                            <UserMsgBubble msg={msg} idx={`msg-${idx}`} /> 
                            <IAMsgBubble msg={msg} idx={`msg-${idx}`} /> 
                       </>
                    ))}
                </ScrollView>

                <View style={{ flexDirection: "row", justifyContent: "center", gap: 10, paddingTop: "2%", paddingBottom: "4%",}}>
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
                            onChangeText={(data) => setTexto(data)}
                            onEndEditing={_AddUserMsg}
                        />
                    </View>
                    <Ionicons.Button
                        name="ios-paper-plane-outline"
                        size={24}
                        color="white"
                        backgroundColor="#303437"
                        borderRadius={24}
                        iconStyle={{ marginLeft: 5, marginTop: 2 }}
                        onPress={_AddUserMsg}
                    />
                </View>
            </KeyboardAvoidingView>
        </View>
    );
};

export default ChatScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 40,
    },
});