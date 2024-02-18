import React from 'react';

const ClassesSidebar = ({  onSelectClass , onNameOfChat }) => {

  const handleClassChange = (room) => {
    onSelectClass(room); // Call callback function to change selected chat room
    onNameOfChat(room);
  };

  // originally these sent to Class 1 and Class 2
  return (
    <aside className="classes-sidebar">
      <h2>Classes</h2>
      <button onClick={() => handleClassChange("CS 11")} className= "class-button"> {/* Change the collection name */}
        CS 11
      </button>
      <button onClick={() => handleClassChange("CS 15")} className= "class-button"> {/* Change the collection name */}
        CS 15
      </button>
    </aside>
  );
};

export default ClassesSidebar;