import React from 'react';

const ClassmatesSidebar = ({ onSelectChatRoom }) => {
  const handleChatRoomChange = (room) => {
    onSelectChatRoom(room); // Call callback function to change selected chat room
  };

  return (
    <aside className="classmates-sidebar">
      <h2>Classmates</h2>
      <button onClick={() => handleChatRoomChange("masfd")}> {/* Change the collection name */}
        Enter "masfd"
      </button>
      <button onClick={() => handleChatRoomChange("messages")}> {/* Change the collection name */}
        Enter "messages""
      </button>
    </aside>
  );
};

export default ClassmatesSidebar;
