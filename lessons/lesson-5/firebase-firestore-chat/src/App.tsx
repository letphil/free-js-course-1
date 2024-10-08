import { useAuthState } from "react-firebase-hooks/auth";

import "./App.css";
import Welcome from "./components/welcome";
import NavBar from "./components/nav-bar";
import ChatBox from "./components/chat-box";
import { auth } from "./firebase";

export default function App() {
  const [user] = useAuthState(auth);

  console.log("user =", user);

  return (
    <div className="App">
      <NavBar />
      {!user ? <Welcome /> : <ChatBox />}
    </div>
  );
}
