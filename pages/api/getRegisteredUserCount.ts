// pages/api/getRegisteredUserCount.js
import { NextApiRequest, NextApiResponse } from 'next';
import { getAuth } from 'firebase-admin/auth';
import { initializeApp, credential } from 'firebase-admin'; // Correct import for credential
import type { App } from 'firebase-admin/app';

const serviceAccountJSON = process.env.FIREBASE_ADMIN_SDK_JSON;

let firebaseApp: App | null = null; // Store the initialized app instance

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!serviceAccountJSON) {
    console.error("FIREBASE_ADMIN_SDK_JSON environment variable is not defined.");
    return res.status(500).json({ error: 'Firebase Admin SDK configuration missing' });
  }

  let serviceAccount;
  try {
    serviceAccount = JSON.parse(serviceAccountJSON);
  } catch (error) {
    console.error("Error parsing FIREBASE_ADMIN_SDK_JSON:", error);
    return res.status(500).json({ error: 'Failed to parse Firebase Admin SDK JSON' });
  }

  // Initialize Firebase Admin SDK if not already initialized
  if (!firebaseApp) {
    try {
      const adminApp = initializeApp({
        credential: credential.cert(serviceAccount),
      });
      firebaseApp = adminApp as App; // Type assertion
      console.log("Firebase Admin SDK initialized.");
    } catch (error) {
      console.error("Error initializing Firebase Admin SDK:", error);
      return res.status(500).json({ error: 'Failed to initialize Firebase Admin SDK' });
    }
  }

  try {
    const auth = getAuth(firebaseApp!); // Get Auth instance using the initialized app
    const listUsersResult = await auth.listUsers();
    const userCount = listUsersResult.users.length;
    return res.status(200).json({ count: userCount });
  } catch (error) {
    console.error('Error listing users:', error);
    return res.status(500).json({ error: 'Failed to fetch user count' });
  }
}