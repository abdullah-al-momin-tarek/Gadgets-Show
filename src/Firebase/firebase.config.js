
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
//   apiKey: "AIzaSyAEu8wVhfTH4_MmlsqnT5wo1gkBnRlnzYI",
//   authDomain: "gadgets-show.firebaseapp.com",
//   projectId: "gadgets-show",
//   storageBucket: "gadgets-show.appspot.com",
//   messagingSenderId: "329482610784",
//   appId: "1:329482610784:web:1cb97cb977b6510136bb05",



  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth