import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDqqqZXV5eCfiegGHPwodNwLKrVMsMUsk4",
  authDomain: "authentication-bfbc5.firebaseapp.com",
  projectId: "authentication-bfbc5",
  storageBucket: "authentication-bfbc5.appspot.com",
  messagingSenderId: "120563423991",
  appId: "1:120563423991:web:2bacb979fae881c40691f2",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
