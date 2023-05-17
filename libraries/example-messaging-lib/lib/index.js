"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timestamp = void 0;
const firebase = __importStar(require("firebase-admin"));
exports.Timestamp = firebase.firestore.Timestamp;
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