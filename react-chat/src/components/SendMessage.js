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
      {/* Add the file upload button with paper clip icon here */}
      <button type="button" class="file-upload-button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path d="M21 10H15V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h1V9h12v1a1 1 0 0 0 1 1v5a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h8a1 1 0 0 0 0-2H6a5 5 0 0 0-5 5v12a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5v-5a1 1 0 0 0-1-1z"/>
        </svg>
      </button>
      {/* End of file upload button */}
      <button type="submit">Send</button>
    </form>
  );
};

export default SendMessage;