import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCYe1-KQY2Cvi9vhbOIviItWKsLbwK0j-Q",
  authDomain: "sponsor-app-923e2.firebaseapp.com",
  projectId: "sponsor-app-923e2",
  storageBucket: "sponsor-app-923e2.appspot.com",
  messagingSenderId: "742680976605",
  appId: "1:742680976605:web:a1cb1f287892a31b014f34",
  measurementId: "G-CFFD4K0N1P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export {app}
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);