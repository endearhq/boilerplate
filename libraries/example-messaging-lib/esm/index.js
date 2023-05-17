import * as firebase from "firebase-admin";
export const Timestamp = firebase.firestore.Timestamp;
// export interface ChannelUser {
//   read_status: Maybe<Timestamp>;
//   last_message_at: Maybe<Timestamp>;
//   participant_at: Maybe<Timestamp>;
// }
// export interface Channel {
//   id: string;
//   type: ContactMethodType;
//   external_id: string;
//   users: Record<string, ChannelUser>; // Record<user.id, ChannelUser>
//   first_message_id: Maybe<string>;
//   first_message_subject: Maybe<string>;
//   first_message: Maybe<string>;
//   first_message_at: Maybe<Timestamp>;
//   last_message_id: Maybe<string>;
//   last_message_subject: Maybe<string>;
//   last_message: Maybe<string>;
//   last_message_at: Maybe<Timestamp>;
//   archived_at: Maybe<Timestamp>;
//   unsubscribed_at: Maybe<Timestamp>;
//   bounced_at: Maybe<Timestamp>;
//   hard_bounced_at: Maybe<Timestamp>;
//   marked_as_spam_at: Maybe<Timestamp>;
//   brand_id: string;
//   created_at: Timestamp;
//   updated_at: Timestamp;
// }
//# sourceMappingURL=index.js.map