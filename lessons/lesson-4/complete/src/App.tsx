import { useEffect } from "react";

import { createUser, loginUser, authObserver } from "./firebase";

export default function App() {
  useEffect(() => {
    authObserver();

    return () => {
      // cleanup
    };
  });

  const signUserUp = async () => {
    try {
      const signupAttempt = await createUser("test1@test.test", "password");
      console.log("signupAttempt =", signupAttempt);
    } catch (error) {
      console.error("error =", error);
    }
  };

  const login = async () => {
    try {
      const loginAttempt = await loginUser("test1@test.test", "password");
      console.log("loginAttempt =", loginAttempt);
    } catch (error) {
      console.error("error =", error);
    }
  };

  return (
    <div>
      <h1>App</h1>
      <button onClick={signUserUp}>signup</button>
      <button onClick={login}>login</button>
    </div>
  );
}
