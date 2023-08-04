import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyBW5STPWLC2vZIcfueZwyqRCiF1wdGgAo8',
	authDomain: 'slimelink-e8cb2.firebaseapp.com',
	projectId: 'slimelink-e8cb2',
	storageBucket: 'slimelink-e8cb2.appspot.com',
	messagingSenderId: '490757841503',
	appId: '1:490757841503:web:c3776b180187e81403b1ea',
	measurementId: 'G-W86Z91VFTS'
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();
