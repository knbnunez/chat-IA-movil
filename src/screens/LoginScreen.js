import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import StatusProfile from "../components/StatusProfile";

import { ROUTES } from '../../routes';

import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {

    const navigation = useNavigation();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onHandleLogin = () => {
        if (email !== "" && password !== "") { // Control que no carguen vacío
            signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                console.log("Login exitoso");
                navigation.navigate(ROUTES.COMMON);
            })
            .catch((err) => {
                Alert.alert("Usuario no válido. Regístrese o inténtelo nuevamente...");
                // console.log("Login error", err.message);
            })
        };
    };

    return(
        <View style={styles.container}>
            <StatusProfile title="Sala común" />
            <SafeAreaView style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder='Enter email'
                    autoCapitalize='none'
                    keyboardType='email-address'
                    textContentType='emailAddress'
                    autoFocus={true}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Enter password'
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry={true}
                    textContentType='password'
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                <TouchableOpacity style={styles.button} onPress={onHandleLogin}>
                    <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 18}}>Log in</Text>
                </TouchableOpacity>
                <View style={{marginTop: 20, flexDirection: 'row', alignItems: 'center', alignSelf: 'center'}}>
                <Text style={{color: 'gray', fontWeight: '600', fontSize: 14}}> Don't have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate(ROUTES.SIGNUP)}>
                    <Text style={{color: '#00c6ff', fontWeight: '600', fontSize: 14}}> Sign Up</Text>
                </TouchableOpacity>
                </View>

                {/* Faltó el Sigin con Google, no logré hacerlo andar */}
            </SafeAreaView>
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
        alignItems: "center",
        paddingTop: 40,
    },
    input: {
        backgroundColor: "#F6F7FB",
        height: 58,
        width: 300,
        marginBottom: 20,
        fontSize: 16,
        borderRadius: 10,
        padding: 12
    },
    form: {
        flex:1, 
        justifyContent: 'center'
    },
    button: {
        backgroundColor: '#373e3e',
        height: 58,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
});  