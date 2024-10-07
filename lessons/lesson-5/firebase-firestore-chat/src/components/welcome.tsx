import GoogleSignin from "../assets/btn_google_signin_dark_pressed_web.png";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function Welcome() {
  const googleSignin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <main className="welcome">
      <h2>Welcome to Chat</h2>
      <h1>Letphil chat</h1>
      <p>sign in with google to sign in to chat</p>
      <button className="sign-in">
        <img
          src={GoogleSignin}
          alt="sign in with google button"
          onClick={googleSignin}
        />
      </button>
    </main>
  );
}
