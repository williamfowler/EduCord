import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

const ClassmatesSidebar = ({ onSelectChatRoom }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Fetch all users from Firestore
        const querySnapshot = await getDocs(collection(db, 'users'));
        const usersData = querySnapshot.docs.map((doc) => doc.data());
        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleChatRoomChange = (user) => {
    // Concatenate the current user's name and the selected user's name
    const chatRoomName = `${auth.currentUser.displayName}_${user.name}`;
    onSelectChatRoom(chatRoomName);
  };

  return (
    <aside className="classmates-sidebar">
      <h2>Classmates</h2>
      {users.map((user) => (
        <button key={user.name} onClick={() => handleChatRoomChange(user)}>
          Enter Chat Room with {user.name}
        </button>
      ))}
    </aside>
  );
};

export default ClassmatesSidebar;
