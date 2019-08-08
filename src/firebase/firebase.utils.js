import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyC7p3KFhgxjvzDWhWBsOKRsmreQIwpAQrI",
    authDomain: "storeapp-39a48.firebaseapp.com",
    databaseURL: "https://storeapp-39a48.firebaseio.com",
    projectId: "storeapp-39a48",
    storageBucket: "",
    messagingSenderId: "698983343700",
    appId: "1:698983343700:web:585973c0d203722a"
  };

firebase.initializeApp(config);

export const auth = firebase.auth()
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;