import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function authObserver(setUserInContext: (_arg: object) => void) {
  const auth = getAuth();
  // const { setUserInContext } = useUserContext();
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      setUserInContext(user);
      console.log(user);
    } else {
      console.log("user signed out: user =", user);
      // @ts-ignore
      setUserInContext(null);
    }
  });
}
