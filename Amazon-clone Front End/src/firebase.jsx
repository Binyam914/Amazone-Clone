// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCb4uJcwR2xjZHjPnYP6T--ThrCivl7BHQ",
  authDomain: "clone-ben9.firebaseapp.com",
  projectId: "clone-ben9",
  storageBucket: "clone-ben9.appspot.com",
  messagingSenderId: "476338464345",
  appId: "1:476338464345:web:4023876e8b457a5cbb7348",
  measurementId: "G-813VW71PHC"
};
// const firebaseConfig = {
//   apiKey: "AIzaSyBVjBEHVWqUDrZis7b27e7ME6TZ2N8_IIU",
//   authDomain: "clone-ben.firebaseapp.com",
//   projectId: "clone-ben",
//   storageBucket: "clone-ben.appspot.com",
//   messagingSenderId: "916132246605",
//   appId: "1:916132246605:web:906023abd7b323c0549804",
//   measurementId: "G-EEB8CFKTCF"
// };
// apiKey: 'AIzaSyDHxsv13wKmUbgxlloPB0RgvqeI1PqxjlA',
// authDomain: 'aug-bc35b.firebaseapp.com',
// projectId: 'aug-bc35b',
// storageBucket: 'aug-bc35b.appspot.com',
// messagingSenderId: '616154326769',
// appId: '1:616154326769:web:3c81c98e82419c3236eb50',
// measurementId: 'G-TGYL74DGL3',
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
