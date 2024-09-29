import { getAuth } from "firebase/auth";

export default function logoutUser() {
  const auth = getAuth();
  return auth.signOut();
}
