import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2VByb1Cx0OGRmZN1IMKYXCl2c847J0zs",
  authDomain: "discord-app-clone-69d30.firebaseapp.com",
  projectId: "discord-app-clone-69d30",
  storageBucket: "discord-app-clone-69d30.appspot.com",
  messagingSenderId: "191484982668",
  appId: "1:191484982668:web:573ae06d9b4df3edc792a9",
  measurementId: "G-J65332P4Y3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
