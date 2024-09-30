import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default async function createUser(email: string, password: string) {
  const auth = getAuth();
  try {
    const firebaseAuthUser = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return firebaseAuthUser;
  } catch (error) {
    console.error("error =", error);
    // throw new Error(error);
    return null;
  }
}
