import React, { useState } from "react";

// added
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const SendMessage = ({ scroll , selectedChatRoom }) => {
  // added
  const [message, setMessage] = useState("");

  const sendMessage = async (event) => {
    event.preventDefault();
    if (message.trim() === "") {
      return;
    }
    const { uid, displayName, photoURL } = auth.currentUser;
    // error is because selectedChatRoom is empty
    await addDoc(collection(db, selectedChatRoom), {
      text: message,
      name: displayName,
      avatar: photoURL,
      createdAt: serverTimestamp(),
      uid,
    });

    await addDoc(collection(db, "users"), {
      name: displayName,
    });
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
        // added
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default SendMessage;
