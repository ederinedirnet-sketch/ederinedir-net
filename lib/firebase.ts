import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIZA…",  //Firebase ekranındakini aynen koy
  authDomain: "ederinedir-net.firebaseapp.com",
  projectId: "ederinedir-net",
  storageBucket: "ederinedir-net.firebasestorage.app",
  messagingSenderId: "243241675…",
  appId: "1:243241675…"
};

export const app = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApps()[0];
