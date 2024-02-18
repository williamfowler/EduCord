import React, { useState } from 'react';
import ClassmatesSidebar from './ClassmateSidebar'
import ClassesSidebar from './ClassesSidebar'
const ClassModulesSidebar = () => {
  const [isClassModulesSidebarVisible, setIsClassModulesSidebarVisible] = useState(false);

  // const showClassmates = () => {
  //   setIsClassmateSidebarVisible(true);
  //   ClassmatesSidebar.hideClassModule(); // Hide the Class Modules sidebar
  // };
  return (
    <aside className="class-module-sidebar">
      <h2>Modules</h2>
    </aside>
  );
};

export default ClassModulesSidebar;

