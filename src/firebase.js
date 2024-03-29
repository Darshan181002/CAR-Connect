import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCltHAd06AzyhIHr1xxaWmvivfpQI_BRAc",
  authDomain: "car-connect-8bf9e.firebaseapp.com",
  projectId: "car-connect-8bf9e",
  storageBucket: "car-connect-8bf9e.appspot.com",
  messagingSenderId: "163883095934",
  appId: "1:163883095934:web:2c6e20769d77ea69f9852f",
  databaseURL: "https://car-connect-8bf9e-default-rtdb.firebaseio.com/"
//   measurementId: "G-XDM7NWSEYT"
};

// app initalization for integration //

export const app = initializeApp(firebaseConfig);

