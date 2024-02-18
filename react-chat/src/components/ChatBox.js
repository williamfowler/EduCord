import React, { useEffect, useRef, useState } from "react";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from "firebase/firestore";
import { db } from "../firebase";
import Message from "./Message";
import SendMessage from "./SendMessage";

const ChatBox = ({ selectedChatRoom }) => {
  const [messages, setMessages] = useState([]);
  const scrollRef = useRef();

  useEffect(() => {
    const q = query(
      collection(db, selectedChatRoom), // Use selectedChatRoom to determine the Firestore collection
      orderBy("createdAt", "desc"),
      limit(50)
    );

    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      const fetchedMessages = [];
      QuerySnapshot.forEach((doc) => {
        fetchedMessages.push({ ...doc.data(), id: doc.id });
      });
      const sortedMessages = fetchedMessages.sort(
        (a, b) => a.createdAt - b.createdAt
      );
      setMessages(sortedMessages);
    });
    return () => unsubscribe;
  }, [selectedChatRoom]);

  useEffect(() => {
    // Scroll to the bottom of the chat whenever messages change
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  

  return (
    <div className="container">
      <main className="chat-box">
        <div className="messages-wrapper">
          {messages?.map((message) => (
            <Message key={message.id} message={message} />
          ))}
        {/* Reference for scrolling */}
        <span ref={scrollRef}></span>
        </div>
        <SendMessage scroll={scrollRef} />
      </main>
    </div>
  );
};

export default ChatBox;
