// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey ,
  authDomain: import.meta.env.VITE_authDomain ,
  projectId: import.meta.env.VITE_projectId ,
  storageBucket: import.meta.env.VITE_storageBucket ,
  messagingSenderId: import.meta.env.VITE_messagingSenderId ,
  appId: import.meta.env.VITE_appId 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBsilVljMVSLlnBwCJqrkl7YBUyrKdh0qQ",
//   authDomain: "dolls-client.firebaseapp.com",
//   projectId: "dolls-client",
//   storageBucket: "dolls-client.appspot.com",
//   messagingSenderId: "362247046049",
//   appId: "1:362247046049:web:da3b52158af5ec527d81e0"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export default app;