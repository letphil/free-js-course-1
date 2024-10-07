import { useState } from "react";
import {
  addDoc,
  collection,
  serverTimestamp,
  FieldValue,
} from "firebase/firestore";

import { auth, db } from "../firebase";

type MessageDoc = {
  id?: string;
  avatar?: string | null;
  createdAt: any;
  uid?: string | null;
  name?: string | null;
  text: string;
};

export default function SendMessage({
  scroll,
}: {
  scroll: {
    current: { scrollIntoView: (arg0: { behavior: string }) => void };
  };
}) {
  // state
  const [message, setMessage] = useState<string>("");

  const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const currentUser = auth.currentUser;
    // 1. trim message for white space at front and back
    if (message.trim() === "") return alert("enter valid message please...");

    // 2. create document structure
    const messageDoc: MessageDoc = {
      avatar: currentUser?.photoURL,
      createdAt: serverTimestamp(),
      uid: currentUser?.uid,
      name: currentUser?.displayName,
      text: message,
    };
    // 3. addDoc
    const messagesCollection = collection(db, "messages");
    await addDoc(messagesCollection, messageDoc);

    setMessage("");

    scroll.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <form className="send-message" onSubmit={(e) => sendMessage(e)}>
      <label htmlFor="messageInput" hidden>
        Enter Message
      </label>
      <input
        id="messageInput"
        name="messageInput"
        type="text"
        className="form-input__input"
        placeholder="type message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
}
