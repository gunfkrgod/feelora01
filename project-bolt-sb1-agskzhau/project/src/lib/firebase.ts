import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCqnOTl0EMUsEwPVH92VlikgPLXH8OkatM",
  authDomain: "feelora-ce00d.firebaseapp.com",
  projectId: "feelora-ce00d",
  storageBucket: "feelora-ce00d.firebasestorage.app",
  messagingSenderId: "983501174854",
  appId: "1:983501174854:web:6bf7d62b44edb21c2f3247",
  measurementId: "G-MQ79Q0MNT8"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;