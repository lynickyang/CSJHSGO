
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQHSh1dkPIX1mGI0vEtDMgr7KK1pBCmFs",
  authDomain: "noteballs-6ceb3.firebaseapp.com",
  projectId: "noteballs-6ceb3",
  storageBucket: "noteballs-6ceb3.appspot.com",
  messagingSenderId: "1072583258076",
  appId: "1:1072583258076:web:6a04e4e3e003b622696919"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)


export {
    db
    }