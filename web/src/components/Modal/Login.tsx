import {
  setIsLoginModalOpen,
  setIsRegisterModalOpen,
} from "../../store/features/home/homeSlice";
import { useDispatch } from "react-redux";
import Google from "../../assets/google.png";
import LoginPicture from "../../assets/brooke-cagle--uHVRvDr7pg-unsplash.jpg";
import StackCubes from "../../assets/stackedCubes.png";
const Login = () => {
  const dispatch = useDispatch();
  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={() => dispatch(setIsLoginModalOpen(false))}
    >
      <div
        className="bg-gray-900 rounded-lg shadow-lg w-2/3 h-4/5 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full h-full flex">
          <div className="w-2/5 relative">
            <img
              src={LoginPicture}
              alt="Login"
              className="w-full object-cover h-full rounded-tl-lg rounded-bl-lg"
            />
            <div className="flex justify-between flex-col absolute top-0 left-0 right-0 bottom-0 p-4">
              <h1 className=" text-black text-xl font-bold flex items-center">
                <img src={StackCubes} alt="" className="h-6 w-6 mr-4" />
                Automata
              </h1>
              <h1 className="text-white text-2xl font-semibold drop-shadow-lg">
                Workflow Management Made Simple
              </h1>
            </div>
          </div>
          <div className="w-3/5 rounded-tr-lg rounded-br-lg flex flex-col justify-center items-center bg-linear-to-br from-slate-900 via-gray-900 to-blue-950">
            <h1 className="text-3xl font-bold">Welcome Back to Automata!</h1>
            <p className="text-gray-400 mt-2 max-w-1/2 text-center">
              Manage your workflows and approvals with ease using Automata.
            </p>
            <form className="mt-10 w-full flex flex-col items-center">
              <input
                type="text"
                className="border border-gray-600 rounded-md p-2 bg-gray-800 text-white w-1/2 mb-4"
                placeholder="Email..."
              />
              <input
                type="password"
                className="border border-gray-600 rounded-md p-2 bg-gray-800 text-white w-1/2 mb-4"
                placeholder="Password..."
              />
              <p className="text-gray-400 text-xs hover:underline cursor-pointer mb-4">
                Forgot Password?
              </p>
              <button className="py-2 bg-blue-500 w-1/2 rounded-full hover:bg-blue-600 cursor-pointer">
                Log in
              </button>
              <p className="text-xs text-gray-400 my-4">Or</p>
              <button className="py-2 bg-gray-700 w-1/2 rounded-full hover:bg-gray-600 cursor-pointer flex items-center justify-center">
                <img src={Google} alt="Google Icon" className="w-5 h-5 mr-2" />
                Continue with Google
              </button>
            </form>
            <p className="text-gray-400 text-xs mt-4">
              Don't have an account?{" "}
              <span
                className="text-white hover:underline cursor-pointer"
                onClick={() => {
                  dispatch(setIsLoginModalOpen(false));
                  dispatch(setIsRegisterModalOpen(true));
                }}
              >
                {" "}
                Register here.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
