import React, { useState } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, query, where, getDocs, serverTimestamp } from "firebase/firestore";

const SendMessage = ({ scroll , selectedChatRoom }) => {
  const [message, setMessage] = useState("");

  const sendMessage = async (event) => {
    event.preventDefault();
    if (message.trim() === "") {
      return;
    }
    const { uid, displayName, photoURL } = auth.currentUser;
    
    // Add the message to the selected chat room collection
    await addDoc(collection(db, selectedChatRoom), {
      text: message,
      name: displayName,
      avatar: photoURL,
      createdAt: serverTimestamp(),
      uid,
    });

    // Check if the user already exists in the "users" collection
    const userQuery = query(collection(db, "users"), where("name", "==", displayName));
    const querySnapshot = await getDocs(userQuery);
    
    // If the user doesn't exist, add them to the "users" collection
    if (querySnapshot.empty) {
      await addDoc(collection(db, "users"), {
        name: displayName,
      });
    }

    setMessage("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <form onSubmit={(event) => sendMessage(event)} className="send-message">
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
};

export default SendMessage;
