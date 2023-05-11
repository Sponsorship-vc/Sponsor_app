import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

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