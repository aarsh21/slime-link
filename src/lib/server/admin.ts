import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import pkg from 'firebase-admin';
import { FB_CLIENT_EMAIL, FB_PRIVATE_KEY, FB_PROJECT_ID } from '$env/static/private';

try {
	pkg.initializeApp({
		credential: pkg.credential.cert({
			projectId: FB_PROJECT_ID,
			clientEmail: FB_CLIENT_EMAIL,
			privateKey: FB_PRIVATE_KEY
		})
	});
} catch (err: any) {
	if (!/already exits/u.test(err.message)) {
		console.log('Firebase Admin Error', err.stack);
	}
}

export const adminDB = getFirestore();
export const adminAuth = getAuth();
