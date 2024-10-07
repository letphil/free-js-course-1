import { useEffect, useRef, useState } from "react";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from "firebase/firestore";

import { db } from "../firebase";
import SendMessage, { MessageDoc } from "./send-message";
import Message from "./message";

export default function ChatBox() {
  // state
  const [messages, setMessages] = useState<MessageDoc[]>([]);
  const scroll = useRef<any>();

  const getMessages: () => void = () => {
    const messagesCollection = collection(db, "messages");
    const q = query(
      messagesCollection,
      orderBy("createdAt", "desc"),
      limit(50)
    );

    const unsubscribe = onSnapshot(q, (Querysnapshot) => {
      console.log("Querysnapshot =", Querysnapshot);
      const fetchedMessages: any[] = [];
      Querysnapshot.forEach((doc) => {
        fetchedMessages.push({ ...doc.data(), id: doc.id });
      });

      console.log("fetchedMessages =", fetchedMessages);

      const sortedMessages = fetchedMessages.sort(
        (a, b) => a.createdAt - b.createdAt
      );

      console.log("sortedMessages =", sortedMessages);

      setMessages(sortedMessages);
    });

    return () => unsubscribe;
  };

  useEffect(getMessages, []);

  return (
    <main className="chat-box">
      <div className="messages-wrapper">
        {messages?.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      <span ref={scroll} />
      <SendMessage scroll={scroll} />
    </main>
  );
}
