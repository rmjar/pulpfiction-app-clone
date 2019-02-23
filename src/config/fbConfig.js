import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';
import "firebase/storage";

const config = {
    apiKey: "AIzaSyCStCD2FQPPjvG57v52jszE4xOJnQMSdp8",
    authDomain: "pulp-fitness.firebaseapp.com",
    databaseURL: "https://pulp-fitness.firebaseio.com",
    projectId: "pulp-fitness",
    storageBucket: "pulp-fitness.appspot.com",
    messagingSenderId: "638113937490"
};
firebase.initializeApp(config);
firebase.firestore();

export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();

export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();

export default firebase;