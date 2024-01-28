const firebase = require("firebase");
const firebaseConfig = {
  apiKey: "AIzaSyAEwZhJo2oQb24U1uoUf8jdzAFJd9b1yJo",
  authDomain: "fir-autenticacion-85d8d.firebaseapp.com",
  projectId: "fir-autenticacion-85d8d",
  storageBucket: "fir-autenticacion-85d8d.appspot.com",
  messagingSenderId: "402682994476",
  appId: "1:402682994476:web:1c89fea07525f009829689"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection("Usuarios");
module.exports = User;
