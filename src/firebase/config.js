import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
	apiKey: "AIzaSyDkAsgsJDlMEf3dbnQcpzTs0cVgB1Kz1hQ",
	authDomain: "ecomerce-53647.firebaseapp.com",
	projectId: "ecomerce-53647",
	storageBucket: "ecomerce-53647.appspot.com",
	messagingSenderId: "381416410315",
	appId: "1:381416410315:web:fbf940f040f01feb8e9f4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
