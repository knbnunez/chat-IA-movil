// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// console.log("Firebase app initialized:", app);

// Módulo de autenticación
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

// Firebase Realtime Database
const database = getDatabase(app);


export { auth, database };