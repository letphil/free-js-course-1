import { useAuthState } from "react-firebase-hooks/auth";

import GoogleSignin from "../assets/btn_google_signin_dark_pressed_web.png";
import { auth } from "../../main";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function NavBar() {
  const [user] = useAuthState(auth);

  const googleSignin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const signOut = () => {
    auth.signOut();
  };

  return (
    <nav className="nav-bar">
      <h1>Letphil Chat</h1>
      {user ? (
        <button className="sign-out" onClick={signOut}>
          Sign Out
        </button>
      ) : (
        <button className="sign-in">
          <img
            onClick={googleSignin}
            src={GoogleSignin}
            alt="sign in with google"
          />
        </button>
      )}
    </nav>
  );
}
