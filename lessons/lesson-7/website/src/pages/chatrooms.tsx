import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import ChatBox from "../components/chat-components/chat-box";

import { auth } from "../main";

export default function Chatrooms() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  console.log("user =", user);

  // useEffect(() => {
  //   // if(!user) Navigate("/")
  // }, [])

  if (!user) {
    return (
      <div>
        <button
          onClick={() => {
            navigate("/auth");
          }}
        >
          go to login
        </button>
      </div>
    );
  }

  return (
    <>
      <button onClick={() => auth.signOut()}>logout</button>
      <ChatBox />
    </>
  );
}
