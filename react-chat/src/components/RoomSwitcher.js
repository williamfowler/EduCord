// ChatRoomSwitcher.js

import React from "react";

const ChatRoomSwitcher = ({ onChangeChatRoom }) => {
  const handleChatRoomChange = (room) => {
    onChangeChatRoom(room);
  };

  return (
    <div>
      <button onClick={() => handleChatRoomChange("room1")}>
        Enter Chat Room 1
      </button>
      <button onClick={() => handleChatRoomChange("room2")}>
        Enter Chat Room 2
      </button>
      {/* Add more buttons for other chat rooms if needed */}
    </div>
  );
};

export default ChatRoomSwitcher;
