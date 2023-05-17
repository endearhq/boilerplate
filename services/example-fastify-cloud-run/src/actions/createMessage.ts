import type {
  ContactMethodType,
  Message,
  MessageWithId,
} from "@endearhq/example-messaging-lib";

import { getFirestore, serverTimestamp } from "../firebase";

export async function createMessage({
  type,
  subject,
  text,
  channel_id,
  brand_id,
}: {
  type: ContactMethodType;
  subject?: string;
  text: string;
  channel_id: string;
  brand_id: string;
}): Promise<MessageWithId> {
  if (type === "email" && !subject) {
    throw new Error("Subject is required for email messages");
  }

  const firestore = getFirestore();
  const newMessageRef = firestore.collection("messages").doc();

  const messageData: Message = {
    type,
    text,
    status: "created",
    direction: "outbound",
    subject: subject ?? null,
    sent_at: null,
    delivered_at: null,
    failed_at: null,
    channel_id,
    brand_id,
    created_at: serverTimestamp(),
    updated_at: serverTimestamp(),
  };

  await newMessageRef.set({ messageData });

  const newMessageDoc = await newMessageRef.get();

  return {
    ...(newMessageDoc.data() as Message),
    id: newMessageDoc.id,
  };
}
