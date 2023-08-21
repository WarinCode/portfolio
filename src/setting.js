import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD7QDU_Mz0T51pLZbPW_euUnOhSVo3u458",
  authDomain: "my-portfolio-745.firebaseapp.com",
  projectId: "my-portfolio-745",
  storageBucket: "my-portfolio-745.appspot.com",
  messagingSenderId: "940138332340",
  appId: "1:940138332340:web:2db0f640b4a8dd424a57e1",
  measurementId: "G-7E00CV3GCL"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics.app.name);
