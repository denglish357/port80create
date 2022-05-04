import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getStorage, connectStorageEmulator } from "firebase/storage";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";
import "firebase/firestore";

const apikey = process.env.VUE_APP_FIREBASE_API_KEY;
const projectId = process.env.VUE_APP_FIREBASE_PROJECT_ID;
const authDom = process.env.VUE_APP_FIREBASE_AUTH_DOMAIN;
const storageBuck = process.env.VUE_APP_FIREBASE_STORAGE_BUCKET;
const messSend = process.env.VUE_APP_FIREBASE_MESSENGING_SENDER_ID;
const appId = process.env.VUE_APP_FIREBASE_APP_ID;
const mesId = process.env.VUE_APP_FIREBASE_MEASUREMENT_ID;
const databaseUrl = process.env.VUE_APP_FIREBASE_DATABASE_URL;

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: apikey,
  authDomain: authDom,
  databaseURL: databaseUrl,
  projectId: projectId,
  storageBucket: storageBuck,
  messagingSenderId: messSend,
  appId: apiId,
  measurementId: mesId,
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);

//export const auth = getAuth(app);
export const auth = getAuth();
export const storage = getStorage(app);
export const functions = getFunctions(app);
export const db = getFirestore();
if (window.location.hostname === "localhost") {
  connectFirestoreEmulator(db, "localhost", 8081);
  connectAuthEmulator(auth, "http://localhost:9099/");
  connectStorageEmulator(storage, "locahost", 9199);
  connectFunctionsEmulator(functions, "localhost", 5001);
}
