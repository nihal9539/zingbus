import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyAbb34eQVa7VLGlxa9rKthg9mxoK-_WZUE",
  authDomain: "busbooking2-22230.firebaseapp.com",
  projectId: "busbooking2-22230",
  storageBucket: "busbooking2-22230.appspot.com",
  messagingSenderId: "64209244285",
  appId: "1:64209244285:web:2eecbc8a502bdb9da26114",
  measurementId: "G-QHLF2M387Y"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getDatabase(app)