import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBEXk-WrRvVH66rMxNr_PQAD5tAk4AQrqc",
  authDomain: "vue-shop-4a2e3.firebaseapp.com",
  databaseURL: "https://vue-shop-4a2e3.firebaseio.com",
  projectId: "vue-shop-4a2e3",
  storageBucket: "",
  messagingSenderId: "999998520812",
  appId: "1:999998520812:web:3eea844fd2df245e"
};

 const fb =   firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  export {fb,db}