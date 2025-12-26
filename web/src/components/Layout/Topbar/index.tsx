import Cubes from "../../../assets/stackedCubes.png";
import { Link } from "react-router-dom";
import { setIsLoginModalOpen } from "../../../store/features/home/homeSlice";
import { useDispatch } from "react-redux";
export default function Topbar() {
  const dispatch = useDispatch();
  return (
    <div className="h-[10vh] flex items-center text-white w-4/5 mx-auto">
      <img
        src={Cubes}
        alt="Stacked Cubes Logo"
        className="brightness-0 invert w-10 h-10 my-auto"
        style={{
          filter:
            "brightness(0) saturate(100%) invert(50%) sepia(98%) saturate(2500%) hue-rotate(200deg)",
        }}
      />
      <div className="flex justify-between w-full relative">
        <h1 className="text-2xl ml-4 font-bold">AutoMata</h1>
        <div className="text-xl flex items-center gap-x-20 absolute left-1/2 -translate-x-1/2">
          <Link to={"/home"} className="cursor-pointer hover:underline">
            Home
          </Link>
          <Link to={"/about"} className="cursor-pointer hover:underline">
            About
          </Link>
          <Link to={"/contact"} className="cursor-pointer hover:underline">
            Contact
          </Link>
        </div>
        <button
          className="text-xl cursor-pointer hover:text-indigo-600"
          onClick={() => dispatch(setIsLoginModalOpen(true))}
        >
          Login
        </button>
      </div>
    </div>
  );
}
