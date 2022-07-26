import firebase from "firebase/app";
import "firebase/database";
const firebaseConfig = {
  API_KEY: process.env.REACT_APP_API_KEY,
  AUTH_DOMAIN: process.env.REACT_APP_AUTH_DOMAIN,
  PROJECT_ID: process.env.REACT_APP_PROJECT_ID,
  STORAGE_BUCKET: process.env.REACT_APP_STORAGE_BUCKET,
  MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
  APP_ID: process.env.APP_ID,
};
const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();