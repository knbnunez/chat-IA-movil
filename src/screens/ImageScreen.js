import {
    Dimensions,
    Image,
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet,
    View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useRef, useState } from "react";
import {
    useIsFocused,
    useNavigation,
    // useRoute
} from "@react-navigation/native";
import { ROUTES } from "../../routes";
import { sendChatImage } from "../services/IAService";
import { incrementResponsesToBotCount } from "../services/analitycStorageService";
import StatusProfile from "../components/StatusProfile";

export default ImageScreen = () => {
    const navigation = useNavigation();
    const scrollViewRef = useRef(null);
    const params = useRoute().params;
    const isFocused = useIsFocused();
    const [msgs, setMsgs] = useState([]);

    const sendImage = async (imageUri) => {
        // TODO: Revisar qué es lo que retorna answer, no estoy del todo seguro
        try {
            const answer = await sendChatImage(imageUri);
            incrementResponsesToBotCount("image");
            setMsgs((messagesUpdated) => messagesUpdated.concat({ imageUri: answer, isUser: false }));
        } catch (error) {
            console.warn("Error al hacer el envío: ", error);
        }
    };

    const addUserMsg = (imageUri) => {
        setMsgs((msgs) =>
            msgs.concat({ imageUri: imageUri, isUser: true })
        );
        sendImage(imageUri);
    };

    useEffect(() => {
        if (isFocused) {
            setTimeout(() => {
                scrollViewRef.current?.scrollToEnd({ animated: true });
            }, 1000);
        }
    }, [isFocused]);

    const navigateToCamera = () => {
        navigation.navigate(ROUTES.CAMERA, { addUserMsg });
    };

    return (
        <View style={styles.container}>
            <StatusProfile title="Canal de Imagen" />
            <KeyboardAvoidingView style={{ flex: 1 }} >
                <ScrollView
                    style={styles.scrollView}
                    contentContainerStyle={{ gap: 20 }}
                    ref={scrollViewRef}
                    onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
                >
                    {msgs.map((msg, idx) => (
                        msg.isUser
                            ? <UserMsgBubble msg={msg.imageUri} idx={`msg-${idx}`} />
                            : <IAMsgBubble msg={msg.imageUri} idx={`msg-${idx}`} />
                    ))}
                </ScrollView>
                <View style={styles.containerInputContainer}>
                    <View style={styles.inputContainer}>
                        <Ionicons
                            name="camera"
                            size={24}
                            color="white"
                            onPress={navigateToCamera}
                        />
                        <Ionicons name="image" size={24} color="white" 
                            // TODO: agregar la funcionalidad
                        />
                    </View>
                </View>
            </KeyboardAvoidingView>
        </View>
    );
};

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
        paddingBottom: "4%"
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "black",
        width: 100,
        padding: 10,
        borderRadius: 19,
    },
    
});