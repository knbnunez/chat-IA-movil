import {
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
import React, { useState, useRef, useEffect } from 'react';
import StatusProfile from "../components/StatusProfile";
import { UserTextBubble } from '../components/UserMsgBubble';
import { IATextBubble } from '../components/IAMsgBubble';

import { useIsFocused } from '@react-navigation/native';
import { auth, database } from "../../config/firebase";
import { ref, set, onValue, push } from "firebase/database"

const CommonRoomScreen = () => {
    // Messages
    const [text, setText] = useState(""); // IMPORTANTE: setState = Admite un valor o una función
    const [msgs, setMsgs] = useState([]);
    const scrollViewRef = useRef(null);
    // Auth
    const [user, setUser] = useState(false);
    const [checkingUser, setCheckingUser] = useState(true);
    const [username, setUsername] = useState("");
    // Both
    const isFocused = useIsFocused();

    // Carga OKEY: https://console.firebase.google.com/project/chat-ia-movil-1642d/database/chat-ia-movil-1642d-default-rtdb/data?hl=es
    const sendText = async (message) => {
        try {
            // No logré utilizar Moment Js...
            const currentDate = new Date();

            // Obtiene cada componente de la fecha con ceros adicionales cuando sea necesario
            const year = currentDate.getFullYear();
            const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
            const day = currentDate.getDate().toString().padStart(2, '0');
            const hours = currentDate.getHours().toString().padStart(2, '0');
            const minutes = currentDate.getMinutes().toString().padStart(2, '0');
            const seconds = currentDate.getSeconds().toString().padStart(2, '0');
            const milliseconds = currentDate.getMilliseconds().toString().padStart(3, '0');

            // Construye la cadena de timestamp con el formato deseado
            const timestamp = `${year}-${month}-${day}_${hours}:${minutes}:${seconds}:${milliseconds}`;

            // console.log(timestamp);

            if (message !== '') set(ref(database, `messages/${timestamp}`), {user: username, text: message, time: hours+':'+minutes});
        } catch (error) {
            console.warn("Error al hacer el envío: ", error);
        }
    };

    const _addUserMsg = () => {
        Keyboard.dismiss();
        if (text !== '') {
            // setMsgs(msgs.concat({ message: text, isUser: true }));
            sendText(text);
            setText(""); // Se resetea el text de input
        }
    };

    const checkUserLoggedIn = async () => {
        //
        try {
            // console.log("auth", auth);
            const currentUser = await auth.currentUser;
            if (currentUser) {
                setUser(true);
                setUsername(currentUser.email.split('@')[0]);
            }
            else setUser(false);
            // console.log("currentUser: ", currentUser.email)
        } catch (error) {
            console.error("Error while checking user:", error);
            setUser(false); // Si hay un error, establece el usuario como no autenticado
        }
        //
        setCheckingUser(false);
    };

    const getMsgs = async () => {
        const messagesRef = await ref(database, "messages/");
        onValue(messagesRef, (snapshot) => {
            if (snapshot.val()) {
                let msgsUpdated = []; // Initialize msgsUpdated here
                Object.keys(snapshot.val()).forEach(key => {
                    const msg = snapshot.val()[key];
                    // console.log(`USER: ${msg.user}, TEXT: ${msg.text}`);
                    // console.log("msg.user: ", msg.user, "username:", username, " = ", msg.user == username);
                    msgsUpdated = msgsUpdated.concat({ 
                        key: key,
                        text: msg.text, 
                        user: msg.user, 
                        time: msg.time, 
                        isUser: msg.user == username 
                    });
                });
                // msgsUpdated.reverse();                          
                setMsgs(msgsUpdated);
            }
        });
    };

    useEffect(() => {
        if (isFocused) {
            // console.log("Screen Focused", isFocused);
            checkUserLoggedIn();
            
            getMsgs();
        };
    }, [isFocused]);


    if (checkingUser) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>Cargando...</Text>
            </View>
        );
    }

    return (
        <>
            {user 
                ? <View style={styles.container}>
                    {/* Barra de estado */}
                    <StatusProfile title="Sala común" />
                    <KeyboardAvoidingView style={{ flex: 1 }} >
                        <ScrollView
                            style={styles.scrollView}
                            contentContainerStyle={{ gap: 20 }}
                            ref={scrollViewRef}
                            onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
                        >
                            {msgs.map((msg, idx) => (
                                msg.isUser
                                    ? <UserTextBubble msg={msg.text} time={msg.time} key={`msg-${idx}`} />
                                    : <IATextBubble userMsg={msg.user} msg={msg.text} time={msg.time} key={`msg-${idx}`} />
                            ))}
                            <Text>{user}</Text>
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
                : <View>
                    <Text>Debe autenticarse para acceder a esta pantalla</Text>
                </View>
            }
        </>
    );
};

export default CommonRoomScreen;

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