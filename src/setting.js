import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDZTBjQ8KTEWyTrOkuAKn-VBcYORuuuRR0",
  authDomain: "my-portfolio-741.firebaseapp.com",
  projectId: "my-portfolio-741",
  storageBucket: "my-portfolio-741.appspot.com",
  messagingSenderId: "1079141951991",
  appId: "1:1079141951991:web:c88531d85c8e00ca97a6f2",
  measurementId: "G-DGW8WSFSJK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);