import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

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

export default firebase;