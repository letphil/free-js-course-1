import { useAuthState } from "react-firebase-hooks/auth";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Landing, Auth, Chatrooms } from "../pages";
import { auth } from "../main";

export default function AppRouter() {
  // const [user, setUser] = useState<UserCredential | null>(null);
  const [user] = useAuthState(auth);

  console.log("user =", user);

  // if (!user) return <div>loading...</div>;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/chatrooms" element={<Chatrooms />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
