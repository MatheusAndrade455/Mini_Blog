import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCfodieodm9BwDs0iXtNne6dyZv0a4-Ywc",
  authDomain: "miniblog-10c34.firebaseapp.com",
  projectId: "miniblog-10c34",
  storageBucket: "miniblog-10c34.appspot.com",
  messagingSenderId: "66211339800",
  appId: "1:66211339800:web:5b93052130c6b53e3c6d6d"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };