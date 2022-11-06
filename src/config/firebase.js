import { initializeApp } from 'firebase/app';
import { FacebookAuthProvider, getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyDElYQKlO_kQT9cIJfGZ73d8d23uymdymc',
  authDomain: 'unichat-f38ac.firebaseapp.com',
  projectId: 'unichat-f38ac',
  storageBucket: 'unichat-f38ac.appspot.com',
  messagingSenderId: '891204392282',
  appId: '1:891204392282:web:fd6f8c8fc6ba23e8888f63',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
