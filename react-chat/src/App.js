// import "./App.css";
// import NavBar from "./components/NavBar";
// import ChatBox from "./components/ChatBox";
// import Welcome from "./components/Welcome";
// import { useState } from "react";

// // added
// import { auth } from "./firebase";
// import { useAuthState } from "react-firebase-hooks/auth";

// function App() {
//   const [user, setUser] = useState(false);
    
//   return (
//     <div className="App">
//       <NavBar />
//       {!user ? (
//         <Welcome />
//       ) : (
//         <>
//           <ChatBox />
//         </>
//       )}
//     </div>
//   );
// }
 
// export default App;

import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./App.css";
import NavBar from "./components/NavBar";
import ChatBox from "./components/ChatBox";
import Welcome from "./components/Welcome";

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <NavBar />
      {!user ? <Welcome /> : <ChatBox />}
    </div>
  );
}
export default App;