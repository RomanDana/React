import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAraHZsHif78qAvEeRTLGKCix3KoavhUWU",
  authDomain: "techstore-76310.firebaseapp.com",
  projectId: "techstore-76310",
  storageBucket: "techstore-76310.appspot.com",
  messagingSenderId: "1037104709038",
  appId: "1:1037104709038:web:3516e5ef009336c69d9c3f",
};

const app = initializeApp(firebaseConfig);

export { app }; 