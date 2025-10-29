import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCn_NhZTx6b84YuiqrQMOgm_jsH8eXGAOI",
  authDomain: "e-delivery-3312f.firebaseapp.com",
  projectId: "e-delivery-3312f",
  storageBucket: "e-delivery-3312f.appspot.com",
  messagingSenderId: "911486002224",
  appId: "1:911486002224:web:5fe36975579d448213f9f5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;