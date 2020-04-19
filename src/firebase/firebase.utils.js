import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {

    apiKey: "AIzaSyCMW6lA4jGJFU36e5lrlK8LjUUstJOekcM",
    authDomain: "crwn-db-abffe.firebaseapp.com",
    databaseURL: "https://crwn-db-abffe.firebaseio.com",
    projectId: "crwn-db-abffe",
    storageBucket: "crwn-db-abffe.appspot.com",
    messagingSenderId: "339535385537",
    appId: "1:339535385537:web:e751237a9f3ed3c18e9540",
    measurementId: "G-T55X60QH59"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;