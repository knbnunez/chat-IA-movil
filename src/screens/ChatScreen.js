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
import React, { useState } from 'react';

import StatusProfile from "../components/StatusProfile";
import UserMsgBubble from '../components/UserMsgBubble';
import IAMsgBubble from '../components/IAMsgBubble';

const ChatScreen = () => {
    const [text, setText] = useState(""); // IMPORTANTE: setState = Admite un valor o una función
    const [msgs, setMsgs] = useState([]);
  
    const fetchApi = async (message) => {
        try {
            const response = await fetch(
                `https://tnt2023.panaltesting.com.ar/chat?question=${message}`
            );
            const data = await response.json();
            setMsgs((messagesUpdated) => messagesUpdated.concat({ message: data.mensaje, isUser: false }));
        } catch (error) {
            console.log("Error al hacer el Fetch: ", error);
        }
    };

    const _addUserMsg = () => {
        if (text !== '') {
            setMsgs(msgs.concat({ message: text, isUser: true})); // Estoy "definiendo" (implícitamente) que msgs es un arreglo de objetos de la manera {text, isUser}, con TypeScript creo que podría haberse definido una interfaz y luego hacer referencia a que msgs es un arreglo de objetos con esa interfaz.
                                                                  // "text" es la variable que está instanciada arriba (proveniente de useState), isUser lo estoy inventando yo en el momento.
            fetchApi(text);
            setText(""); // Y se resetea el text de input
        }
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
                        msg.isUser? 
                            (<UserMsgBubble msg={msg.message} idx={`msg-${idx}`} />) // Return this.
                            : (<IAMsgBubble msg={msg.message} idx={`msg-${idx}`} />) // Else, return this.
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
                            value={text}
                            onChangeText={(data) => setText(data)}
                            onEndEditing={_addUserMsg}
                        />
                    </View>
                    <Ionicons.Button
                        name="ios-paper-plane-outline"
                        size={24}
                        color="white"
                        backgroundColor="#303437"
                        borderRadius={24}
                        iconStyle={{ marginLeft: 5, marginTop: 2 }}
                        onPress={_addUserMsg}
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