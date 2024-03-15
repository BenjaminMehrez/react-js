import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBU99Gl2pntcGKkJCdWyAFHjRcGHmz0ObE",
  authDomain: "react-js-1ce03.firebaseapp.com",
  projectId: "react-js-1ce03",
  storageBucket: "react-js-1ce03.appspot.com",
  messagingSenderId: "269168324183",
  appId: "1:269168324183:web:930d549cd1b1da078e7d12"
};


const app = initializeApp(firebaseConfig);


export const initFirebase = () => app