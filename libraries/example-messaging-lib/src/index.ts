import * as firebase from "firebase-admin";

export type Timestamp = firebase.firestore.Timestamp;
export const Timestamp = firebase.firestore.Timestamp;

export type Maybe<T> = T | null | undefined;

export type MessageStatus =
  | "created"
  | "sent"
  | "delivered"
  | "no_receipt"
  | "failed";

export type MessageDirection = "outbound" | "inbound";

export type ContactMethodType = "email" | "sms";

export interface Message {
  type: ContactMethodType;
  direction: MessageDirection;
  status: MessageStatus;
  text: string;
  subject: Maybe<string>;
  sent_at: Maybe<Timestamp>;
  delivered_at: Maybe<Timestamp>;
  failed_at: Maybe<Timestamp>;
  channel_id: string;
  brand_id: string;
  created_at: Timestamp;
  updated_at: Timestamp;
}

export type MessageWithId = Message & { id: string };

export enum FirestoreCollection {
  Messages = "messages",
}
