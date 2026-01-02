import {
  setIsRegisterModalOpen,
  setIsLoginModalOpen,
} from "../../store/features/home/homeSlice";
import { useDispatch, useSelector } from "react-redux";
import RegisterImage from "../../assets/annie-spratt-MChSQHxGZrQ-unsplash.jpg";
import StackedCubes from "../../assets/stackedCubes.png";
import { useMutation } from "@apollo/client/react";
import RegisterUserMutation from "../../GraphQL/User/RegisterMutation.gql";
import {
  setUsername,
  setEmail,
  setPassword,
} from "../../store/features/home/homeSlice";
import type React from "react";
import type { RootState } from "../../store";
import toast from "react-hot-toast";

const Register = () => {
  const dispatch = useDispatch();
  const { username, email, password } = useSelector(
    (state: RootState) => state.register
  );
  console.log("Register State:", { username, email, password });

  const [registerMutation] = useMutation(RegisterUserMutation);

  const handleRegister = async () => {
    try {
      const response = await registerMutation({
        variables: {
          username: username,
          email: email,
          password: password,
        },
      });
      if (response && response.data) {
        toast("Registered Successfully! You may now log in.", {
          icon: "❤️",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        dispatch(setIsRegisterModalOpen(false));
        dispatch(setIsLoginModalOpen(true));
      }
    } catch (e) {
      console.error("Registration error:", e);
    }
  };
  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={() => dispatch(setIsRegisterModalOpen(false))}
    >
      <div
        className="bg-gray-900 rounded-lg shadow-lg w-2/3 h-4/5 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full h-full flex">
          <div className="w-3/5 h-full rounded-tl-lg rounded-bl-lg flex flex-col justify-center items-center bg-linear-to-tl from-slate-900 via-gray-900 to-blue-950">
            <h1 className="text-3xl font-bold">Create an Account</h1>
            <p className="text-gray-400 mt-2 max-w-2/3 text-center">
              Join now to start automating your workflows and approvals with
              Automata.
            </p>
            <form
              className="mt-10 w-full flex flex-col items-center gap-y-3"
              onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                handleRegister();
              }}
            >
              <input
                type="text"
                className="border border-gray-600 rounded-md p-2 bg-gray-800 text-white w-1/2 mb-4"
                placeholder="Username..."
                value={username}
                onChange={(e) => dispatch(setUsername(e.target.value))}
              />
              <input
                type="text"
                className="border border-gray-600 rounded-md p-2 bg-gray-800 text-white w-1/2 mb-4"
                placeholder="Email..."
                value={email}
                onChange={(e) => dispatch(setEmail(e.target.value))}
              />
              <input
                type="password"
                className="border border-gray-600 rounded-md p-2 bg-gray-800 text-white w-1/2 mb-4"
                placeholder="Password..."
                value={password}
                onChange={(e) => dispatch(setPassword(e.target.value))}
              />
              <button className="py-2 bg-blue-500 w-1/2 rounded-full hover:bg-blue-600 cursor-pointer">
                Register
              </button>
            </form>
            <p className="text-gray-400 text-xs mt-4">
              Already have an Account?{" "}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={() => {
                  dispatch(setIsRegisterModalOpen(false));
                  dispatch(setIsLoginModalOpen(true));
                }}
              >
                Log in
              </span>
            </p>
          </div>
          <div className="w-2/5 relative">
            <img
              src={RegisterImage}
              alt=""
              className="w-full object-cover h-full rounded-tr-lg rounded-br-lg"
            />
            <div className="flex justify-between flex-col absolute top-0 left-0 right-0 bottom-0 p-4">
              <h1 className=" text-white text-xl font-bold flex items-center">
                <img src={StackedCubes} alt="Logo" className="h-6 w-6 mr-4" />
                Automata
              </h1>
              <h1 className="text-white text-2xl font-semibold drop-shadow-lg">
                Start Your Journey Today
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
