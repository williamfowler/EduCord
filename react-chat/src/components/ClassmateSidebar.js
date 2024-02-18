import React, { useState } from 'react';

const ClassmatesSidebar = ({ classmates, onSelectClassmate }) => {
  const [isClassModulesSidebarVisible, setIsClassModulesSidebarVisible] = useState(false);



  
  return (
    <aside className="classmates-sidebar">
      <h2>Classmates</h2>
    </aside>
  );
};

export default ClassmatesSidebar;
