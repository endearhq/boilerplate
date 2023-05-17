import * as firebase from "firebase-admin";
export declare type Timestamp = firebase.firestore.Timestamp;
export declare const Timestamp: typeof firebase.firestore.Timestamp;
export declare type Maybe<T> = T | null | undefined;
export declare type MessageStatus = "created" | "sent" | "delivered" | "no_receipt" | "failed";
export declare type MessageDirection = "outbound" | "inbound";
export declare type ContactMethodType = "email" | "sms";
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
export declare type MessageWithId = Message & {
    id: string;
};
