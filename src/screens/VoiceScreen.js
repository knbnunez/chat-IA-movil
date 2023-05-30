import { View, Dimensions, StyleSheet, ScrollView, TouchableOpacity, Text } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { useIsFocused } from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons';

import { LinearGradient } from 'expo-linear-gradient';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const squareContainerWidth = windowWidth/1.5;
const squareContainerHeight = windowHeight/3;

export default VoiceScreen = () => {
    const scrollViewRef = useRef(null);
    const isFocused = useIsFocused();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isFocused) {
            setTimeout(() => {
                scrollViewRef.current?.scrollToEnd({ animated: true });
            }, 1000);
        }
    }, [isFocused]);

    const handlePress = () => {
      setIsVisible(!isVisible); 
    };

    return (
        <View style={styles.container}>
            <StatusProfile title="Canal de Voz" />
            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={{ gap: 20 }}
                ref={scrollViewRef}
                onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
            >
                {/* Mensajes de Voz y respuestas de la IA... */}

                {isVisible && 
                    <LinearGradient
                        colors={["#F15F79", "#ee9ca7"]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={styles.warningContainer}
                    >
                        <Text style={styles.warningText}>Lo sentimos, esta funcionalidad todavía no ha sido implementada... ¡Pero próximamente habrá novedades!</Text>   
                    </LinearGradient>
                }
            </ScrollView>
            
            
            
            
            <TouchableOpacity style={styles.inputContainer} onPress={handlePress}>
                <FontAwesome name="microphone" size={24} color="white"/>
            </TouchableOpacity>
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
        paddingHorizontal: "7%",
    },
    warningContainer: {
        backgroundColor: "#f997ff",
        width: 300,
        padding: 10,
        marginHorizontal: 24,
        marginVertical: 20,
        borderTopRightRadius: 24,
        borderTopLeftRadius: 24,
        borderBottomRightRadius: 24,    
    },
    warningText: {
        color: "white",
        fontSize: 16,
        fontWeight: 'bold',
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: "black",
        width: 55,
        padding: 15,
        marginBottom: 15,
        borderRadius: 50,
        borderWidth: 0.33,
        borderColor: "#696969",
        position: "absolute",
        bottom: "1.5%",
        left: "44%",
    },
});