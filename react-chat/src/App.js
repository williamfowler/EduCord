import React, { useState } from "react";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./App.css";
import NavBar from "./components/NavBar";
import ChatBox from "./components/ChatBox";
import Welcome from "./components/Welcome";
import ClassmatesSidebar from "./components/ClassmateSidebar";
import ClassesSidebar from "./components/ClassesSidebar"

function App() {
  const [user] = useAuthState(auth);

  // Related to chat room
  const [selectedChatRoom, setSelectedChatRoom] = useState("CS 11"); // Default to "messages"
  const [nameOfChat, setNameOfChat] = useState("CS 11"); // Default to "messages"


  return (
    <div className="App">
      {!user ? (
        <Welcome />
      ) : (
        <>
          <ClassmatesSidebar onSelectChatRoom={setSelectedChatRoom} onNameOfChat={setNameOfChat}/>
          <ClassesSidebar onSelectClass={setSelectedChatRoom} onNameOfChat={setNameOfChat}/>
          <NavBar nameOfChat={nameOfChat}/>
          <ChatBox selectedChatRoom={selectedChatRoom} />
        </>
      )}
    </div>
  );
}

export default App;