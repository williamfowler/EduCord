import React from 'react';

const ClassesSidebar = ({ /*classes, */ onSelectClass }) => {

  const handleClassChange = (room) => {
    onSelectClass(room); // Call callback function to change selected chat room
  };

  return (
    <aside className="classes-sidebar">
      <h2>Classes</h2>
      <button onClick={() => handleClassChange("Class 1")}> {/* Change the collection name */}
        Class 1
      </button>
      <button onClick={() => handleClassChange("Class 2")}> {/* Change the collection name */}
        Class 2
      </button>
    </aside>
  );
};

export default ClassesSidebar;
