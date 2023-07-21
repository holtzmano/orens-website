import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAVQKD8uz_WjfYNJgLUeQzwYL-hYxhY2L8",
    authDomain: "orens-website.firebaseapp.com",
    databaseURL: "https://orens-website-default-rtdb.firebaseio.com",
    projectId: "orens-website",
    storageBucket: "orens-website.appspot.com",
    messagingSenderId: "902805241354",
    appId: "1:902805241354:web:6178deeb598cf9cc9de9f3",
    measurementId: "G-C7CTML1F93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);

