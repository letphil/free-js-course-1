import { useState, Dispatch, SetStateAction } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  UserCredential,
} from "firebase/auth";

export default function App() {
  const [user, setUser] = useState<UserCredential | null>(null);

  if (user) {
    return <div>{JSON.stringify(user)}</div>;
  }

  return <AuthScreen setUser={setUser} />;
}

const AuthScreen = ({
  setUser,
}: {
  setUser: Dispatch<SetStateAction<UserCredential | null>>;
}) => {
  const [isSignup, setIsSignup] = useState<boolean>(false);
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  const [userConfirmPassword, setUserConfirmPassword] = useState<string>("");

  const resetValues = () => {
    setUserEmail("");
    setUserPassword("");
    setUserConfirmPassword("");
  };

  const createUser: (
    email: string,
    password: string
  ) => Promise<UserCredential | undefined> = async (
    email: string,
    password: string
  ) => {
    const auth = getAuth();
    try {
      const createUserAttempt = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log("craeteUserAttempt =", createUserAttempt);
      return createUserAttempt;
    } catch (error) {
      console.error("error =", error);
    }
  };

  return (
    <div
      className="container flex justify-center items-center"
      style={{
        // borderWidth: 1,
        // borderStyle: "solid",
        // borderColor: "black",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div className="relative flex flex-col justify-center h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-lg">
          <h1 className="text-3xl font-semibold text-center text-purple-700">
            Firebase Auth
          </h1>
          <div className="space-y-4">
            <div>
              <label className="label">
                <span className="text-base label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="Email Address"
                className="w-full input input-bordered input-primary"
                value={userEmail}
                onChange={(e) => {
                  setUserEmail(e.target.value);
                }}
              />
            </div>
            <div>
              <label className="label">
                <span className="text-base label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full input input-bordered input-primary"
                value={userPassword}
                onChange={(e) => {
                  setUserPassword(e.target.value);
                }}
              />
            </div>
            {isSignup && (
              <div>
                <label className="label">
                  <span className="text-base label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full input input-bordered input-primary"
                  value={userConfirmPassword}
                  onChange={(e) => {
                    setUserConfirmPassword(e.target.value);
                  }}
                />
              </div>
            )}
            {/* <a
              href="#"
              className="text-xs text-gray-600 hover:underline hover:text-blue-600"
            >
              Forget Password?
            </a> */}
            <div>
              <button
                className="btn btn-primary mr-2"
                onClick={async () => {
                  if (isSignup) return setIsSignup(false);

                  const auth = getAuth();
                  const signInAttempt = await signInWithEmailAndPassword(
                    auth,
                    userEmail,
                    userPassword
                  );
                  console.log("signinAttemtp =", signInAttempt);
                  if (signInAttempt) {
                    setUser(signInAttempt);
                  }
                }}
              >
                Login
              </button>
              <button
                className="btn btn-secondary"
                // disabled={

                //   // userPassword !== userConfirmPassword ||
                //   // userPassword === "" ||
                //   // userConfirmPassword === ""
                // }
                onClick={async () => {
                  if (!isSignup) return setIsSignup(true);
                  const createUserPayload: {
                    email: string;
                    password: string;
                    confirmPassword?: string;
                  } = {
                    email: userEmail,
                    password: userPassword,
                    confirmPassword: userConfirmPassword,
                  };

                  if (Object.values(createUserPayload).some((v) => v === "")) {
                    resetValues();
                    return alert("check input values...");
                  }

                  console.log("createUserPalyload =", createUserPayload);

                  if (
                    createUserPayload.password !==
                    createUserPayload.confirmPassword
                  ) {
                    resetValues();
                    return alert("password and confirm password do not match");
                  }

                  const firebaseUser: UserCredential | undefined =
                    await createUser(
                      createUserPayload.email,
                      createUserPayload.password
                    );

                  if (firebaseUser) {
                    setUser(firebaseUser);
                  }
                }}
              >
                Signup
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
