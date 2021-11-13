import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyCdoysW_m0eqnUFhl7CEIchImhuMlvRdKg",
    authDomain: "fir-crdu.firebaseapp.com",
    databaseURL: "https://fir-crdu.firebaseio.com",
    projectId: "fir-crdu",
    storageBucket: "fir-crdu.appspot.com",
    messagingSenderId: "139202146514",
    appId: "1:139202146514:web:7e393b970de2f755817d0b"
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });
export default firebase