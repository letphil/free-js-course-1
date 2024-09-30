import { createUser, loginUser } from "./firebase";

export default function App() {
  const signUserUp = async () => {
    try {
      const signupAttempt = await createUser("test@test.test", "password");
      console.log("signupAttempt =", signupAttempt);
    } catch (error) {
      console.error("error =", error);
    }
  };

  const login = async () => {
    try {
      const loginAttempt = await loginUser("test@test.test", "password");
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
