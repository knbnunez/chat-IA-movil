import {
    Button,
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
    Dimensions,
    Keyboard,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useState, useRef } from 'react';
import StatusProfile from "../components/StatusProfile";
import { UserTextBubble } from '../components/UserMsgBubble';
import { IATextBubble } from '../components/IAMsgBubble';
import { sendChatQuestion } from "../services/IAService"
import { incrementResponsesToBotCount } from "../services/analitycStorageService";

const ChatScreen = () => {
    const [text, setText] = useState(""); // IMPORTANTE: setState = Admite un valor o una función
    const [msgs, setMsgs] = useState([]);
    const scrollViewRef = useRef(null);

    const sendText = async (message) => {
        try {
            const answer = await sendChatQuestion(message);
            incrementResponsesToBotCount("text");
            setMsgs((messagesUpdated) => messagesUpdated.concat({ message: answer.mensaje, isUser: false }));
        } catch (error) {
            console.warn("Error al hacer el envío: ", error);
        }
    };

    const _addUserMsg = () => {
        Keyboard.dismiss();
        if (text !== '') {
            setMsgs(msgs.concat({ message: text, isUser: true }));
            sendText(text);
            setText(""); // Se resetea el text de input
        }
    }

    return (
        <View style={styles.container}>
            {/* Barra de estado */}
            <StatusProfile title="Canal de Texto" />
            <KeyboardAvoidingView style={{ flex: 1 }} >
                <ScrollView
                    style={styles.scrollView}
                    contentContainerStyle={{ gap: 20 }}
                    ref={scrollViewRef}
                    onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
                >
                    {msgs.map((msg, idx) => (
                        msg.isUser
                            ? <UserTextBubble msg={msg.message} key={`msg-${idx}`} />
                            : <IATextBubble userMsg={"AI"} msg={msg.message} key={`msg-${idx}`} />
                    ))}
                </ScrollView>

                <View style={styles.containerInputContainer}>
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
    scrollView: { 
        height: Dimensions.get("screen").height * 0.7, 
        width: Dimensions.get("screen").width, 
        paddingHorizontal: "7%" 
    },
    containerInputContainer: { 
        flexDirection: "row", 
        justifyContent: "center", 
        gap: 10, 
        paddingTop: "2%", 
        paddingBottom: "4%",
        borderRadius: 20,
    },
});