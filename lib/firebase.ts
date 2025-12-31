import { initializeApp, getApps, getApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "SENIN_API_KEY",
  authDomain: "ederinedir-net.firebaseapp.com",
  projectId: "ederinedir-net",
  storageBucket: "ederinedir-net.appspot.com",
  messagingSenderId: "243421675560",
  appId: "1:243421675560:web:7a391b5c9953ff6cceeb1d"
};

export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
