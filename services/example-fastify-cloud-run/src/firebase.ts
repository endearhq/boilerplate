import * as firebase from "firebase-admin";

type App = firebase.app.App;
type DocumentReference = firebase.firestore.DocumentReference;
type DocumentData = firebase.firestore.DocumentData;
type Firestore = firebase.firestore.Firestore;
type QuerySnapshot = firebase.firestore.QuerySnapshot;
type Query = firebase.firestore.Query;
type Transaction = firebase.firestore.Transaction;
type DocumentSnapshot = firebase.firestore.DocumentSnapshot;
type Precondition = firebase.firestore.Precondition;
type Messaging = firebase.messaging.Messaging;

export type {
  Firestore,
  Messaging,
  QuerySnapshot,
  Query,
  DocumentReference,
  DocumentData,
  Transaction,
  DocumentSnapshot,
  Precondition,
};

export type Timestamp = firebase.firestore.Timestamp;
export const Timestamp = firebase.firestore.Timestamp;

function initializeFirebaseApp(
  params: { name: string; serviceAccount: string } | undefined,
): App {
  const name = params?.name ?? "default";

  // This checks for existing apps that may have been created.
  // Necessary for Vercel, where the `if(!app)` may not be
  // sufficient to contrain to a singleton
  const existing = firebase.apps.find((a) => a?.name === name);

  if (existing) {
    return existing;
  } else if (params) {
    return firebase.initializeApp(
      {
        credential: firebase.credential.cert(JSON.parse(params.serviceAccount)),
      },
      name,
    );
  } else {
    const [serviceAccount, googleApplicationCredentials] = [
      process.env["GCP_SERVICE_ACCOUNT"],
      process.env["GOOGLE_APPLICATION_CREDENTIALS"],
    ];

    if (serviceAccount) {
      return firebase.initializeApp(
        { credential: firebase.credential.cert(JSON.parse(serviceAccount)) },
        name,
      );
    } else if (googleApplicationCredentials) {
      return firebase.initializeApp(
        { credential: firebase.credential.applicationDefault() },
        name,
      );
    } else {
      throw new Error(
        "Neither GCP_SERVICE_ACCOUNT nor GOOGLE_APPLICATION_CREDENTIALS are set. At least one is required for Firebase.",
      );
    }
  }
}

export function getFirestore(params?: {
  name: string;
  serviceAccount: string;
}): Firestore {
  return firebase.firestore(initializeFirebaseApp(params));
}

export function getMessaging(params?: {
  name: string;
  serviceAccount: string;
}): Messaging {
  return firebase.messaging(initializeFirebaseApp(params));
}

export function serverTimestamp() {
  return firebase.firestore.FieldValue.serverTimestamp() as Timestamp;
}

export function documentId() {
  return firebase.firestore.FieldPath.documentId();
}

export function increment(num: number) {
  const result = firebase.firestore.FieldValue.increment(num);
  return result as unknown as number;
}

export function arrayUnion<T>(...elements: T[]) {
  return firebase.firestore.FieldValue.arrayUnion(
    ...elements,
  ) as unknown as T[];
}

export function arrayRemove<T>(...elements: T[]) {
  return firebase.firestore.FieldValue.arrayRemove(
    ...elements,
  ) as unknown as T[];
}
