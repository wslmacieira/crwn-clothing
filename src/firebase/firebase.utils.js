import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCaRDifrydcVoczOb3kpGyNkclGsomOFYQ',
  authDomain: 'crwn-db-e53d6.firebaseapp.com',
  databaseURL: 'https://crwn-db-e53d6.firebaseio.com',
  projectId: 'crwn-db-e53d6',
  storageBucket: '',
  messagingSenderId: '32342368132',
  appId: '1:32342368132:web:d662b3fec987ca764787d1'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
