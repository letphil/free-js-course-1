import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function authObserver() {
  const auth = getAuth();
  // const { setUserInContext } = useUserContext();
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      // setUserInContext(user);
      console.log("user =", user);
    } else {
      console.log("user signed out: user =", user);

      // setUserInContext(null);
    }
  });
}
