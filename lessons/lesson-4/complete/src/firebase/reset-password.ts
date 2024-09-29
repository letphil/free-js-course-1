import { getAuth, sendPasswordResetEmail } from "firebase/auth";

async function resetPassword(email: string) {
  const auth = getAuth();
  try {
    const reset = await sendPasswordResetEmail(auth, email);
    console.log("reset =", reset);
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default resetPassword;

// function ForgotPassword(){
//  const onSubmit = async (e) => {
//       e.preventDefault();
//       try {
//          const auth = getAuth();
//          await sendPasswordResetEmail(auth, email);
//          toast.success("Email was sent");
//       } catch (error) {
//          toast.error("Could not send reset email");
//       }
//    };
// }
