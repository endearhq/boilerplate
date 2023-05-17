import type { MessageWithId } from "@endearhq/example-messaging-lib";

import { getFirestore } from "../firebase";

export async function messages({
  ids,
}: {
  ids: string[];
}): Promise<MessageWithId[]> {
  const firestore = getFirestore();

  const messageIds = ids.map((id) => firestore.collection("messages").doc(id));

  const messageDocs = await firestore.getAll(...messageIds);

  const messages = messageDocs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      ...data,
    } as MessageWithId;
  });

  return messages;
}
