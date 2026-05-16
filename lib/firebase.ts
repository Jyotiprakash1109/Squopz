import { initializeApp } from 'firebase/app'

import {
  getAuth,
  GoogleAuthProvider,
} from 'firebase/auth'

import {
  getFirestore,
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDdniz3Ol5vCQFhQAYlOq6cUPA-2Qw8CUg",
    authDomain: "squopz.firebaseapp.com",
    projectId: "squopz",
    storageBucket: "squopz.firebasestorage.app",
    messagingSenderId: "828034410168",
    appId: "1:828034410168:web:76db765da85f580d16364d",
    measurementId: "G-LH7QTRP4JG"
};

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()

const db = getFirestore(app)

export {
  auth,
  googleProvider,
  db,
}