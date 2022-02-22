import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
    apiKey: "Your Api Key",
    authDomain: "fir-crdu.firebaseapp.com",
    databaseURL: "https://fir-crdu.firebaseio.com",
    projectId: "fir-crdu",
    storageBucket: "fir-crdu.appspot.com",
    messagingSenderId: "139202146514",
    appId: "Your App Id"
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });
export default firebase
