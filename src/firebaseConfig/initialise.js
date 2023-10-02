import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyAVzf04FMxrgwCPpWlO-4oUK6oTfLnhh_M",
    authDomain: "rekrut-61297.firebaseapp.com",
    projectId: "rekrut-61297",
    storageBucket: "rekrut-61297.appspot.com",
    messagingSenderId: "218011738876",
    appId: "1:218011738876:web:6b347dbd457935015a6d79",
    measurementId: "G-H86RJN8MDW"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }