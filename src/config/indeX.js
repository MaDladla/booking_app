// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore";


    const firebaseConfig = {
        apiKey: "AIzaSyD5BQYDCSP-A5kH20CcfEzPa-y9zvBu6VU",
        authDomain: "budgetapp-7f86a.firebaseapp.com",
        databaseURL: "https://budgetapp-7f86a-default-rtdb.firebaseio.com",
        projectId: "budgetapp-7f86a",
        storageBucket: "budgetapp-7f86a.appspot.com",
        messagingSenderId: "899244584219",
        appId: "1:899244584219:web:7f374a422a0347a3ac77be",
        measurementId: "G-YYVRYPPGJB"
      };
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// return getDatabase(app);


