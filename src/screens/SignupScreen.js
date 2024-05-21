import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../config/firebase";

import { ROUTES } from '../../routes';
import { useNavigation } from '@react-navigation/native';

const SignupScreen = () => {

    const navigation = useNavigation();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onHandleSignup = () => {
        if (email !== "" && password !== "") {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCred) => {
                    // const userString = JSON.stringify(userCred.user, null, 2);
                    // Alert.alert("User Information", userString);
                    console.log("Signup exitoso");
                    navigation.navigate(ROUTES.COMMON);
                })
                .catch((err) => {
                    // Alert.alert("Algo no anduvo bien... Inténtelo nuevamente por favor");
                    Alert.alert(String(err));
                });
        }
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
                <TouchableOpacity style={styles.button} onPress={onHandleSignup}>
                    <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 18}}>Signup</Text>
                </TouchableOpacity>
                <View style={{marginTop: 20, flexDirection: 'row', alignItems: 'center', alignSelf: 'center'}}>
                <Text style={{color: 'gray', fontWeight: '600', fontSize: 14}}> Do you already have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate(ROUTES.LOGIN)}>
                    <Text style={{color: '#00c6ff', fontWeight: '600', fontSize: 14}}> Login </Text>
                </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    );
};

export default SignupScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
        // justifyContent: "center",
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
        justifyContent: 'center',
        // marginHorizontal: 30
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