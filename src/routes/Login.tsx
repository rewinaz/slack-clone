import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

type Props = {};

const Login = (props: Props) => {
  const signInUser = (e: any) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("Success");
      })
      .catch((err: Error) => {
        alert(err.message);
      });
  };

  return (
    <div className="bg-gray-200 flex items-center justify-center w-full h-screen">
      <div className="bg-white p-20 flex flex-col items-center justify-center">
        <img
          className="w-40 mb-8"
          src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
          alt=""
        />
        <h1 className="text-4xl">Sign In To Rewina</h1>
        <p>rewina.slack.com</p>

        <button
          onClick={signInUser}
          className="bg-green-800 text-sm p-3 rounded-md text-white mt-8 hover:bg-green-900"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
