// code here https://firebase.google.com/docs/auth/web/password-auth

import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

export default async function loginUser(email: string, password: string) {
  const auth = getAuth();

  try {
    const firebaseAuthUser = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return firebaseAuthUser;
  } catch (error: unknown) {
    console.error("error =", error);
    return null;
  }
}

// export function getUser() {
//   console.log('hello get user')
// }

// export function me() {
//   return 'user'
// }

/**
 * const loginAttempt = await loginUser(userEmail, userPassword);
 * 
 * if(loginAttempt) { 
* if user exists i would like to update users lastSeenAt
 * 
 * if not i need create user
 * retrun
 * }
 * 
 * alert("somethign went wrong")
 
 */
