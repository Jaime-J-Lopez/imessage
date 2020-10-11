import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCK5Y3tZ8FgOyNGbmB26fPdLM8eiwYI4pE",
    authDomain: "imessage-fdd94.firebaseapp.com",
    databaseURL: "https://imessage-fdd94.firebaseio.com",
    projectId: "imessage-fdd94",
    storageBucket: "imessage-fdd94.appspot.com",
    messagingSenderId: "632603520795",
    appId: "1:632603520795:web:38d323bd404782747d6dbe",
    measurementId: "G-3EPJELCG14"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
