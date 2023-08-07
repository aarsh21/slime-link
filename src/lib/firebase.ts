import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, onAuthStateChanged, type User } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { writable } from 'svelte/store';

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

function userStore() {
	let unsubscribe: () => void;

	if (!auth || !globalThis.window) {
		console.log('Auth is not initialized in the browser ');
		const { subscribe } = writable<User | null>(null);
		return {
			subscribe
		};
	}
	const { subscribe } = writable(auth?.currentUser, (set) => {
		onAuthStateChanged(auth, (user) => {
			set(user);
		});
		return () => unsubscribe();
	});
	return {
		subscribe
	};
}

export const user = userStore();
