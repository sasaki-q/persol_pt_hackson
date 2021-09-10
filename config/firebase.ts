import firebase from "firebase/app";
import "firebase/storage";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.DOMAIN,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGE,
    messagingSenderId: process.env.SENDERID,
    appId: process.env.APPID,
    measurementId: process.env.MEASUREMENTID,
};

firebase.apps.length === 0 && firebase.initializeApp(firebaseConfig);
export default firebase
export const firebaseStorage = firebase.storage()
export const firebaseFirestore = firebase.firestore()


