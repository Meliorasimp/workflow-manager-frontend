import StackedCubes from "../../../assets/stackedCubes.png";
import g1 from "../../../assets/g1.jpg";
const DashboardTopbar = () => {
  return (
    <div className="flex items-center p-4 text-white justify-between border-b border-gray-800 px-5">
      <div className="flex gap-x-6 items-center ">
        <img
          src={StackedCubes}
          alt="Stacked Cubes"
          className="invert-100 h-10 w-10"
        />
      </div>
      <div className="flex gap-x-4">
        <input
          type="text"
          className="bg-gray-700 rounded-full px-4 py-2"
          placeholder="Search Automata"
        />
        <img src={g1} alt="Profile" className="h-10 w-10 rounded-full" />
      </div>
    </div>
  );
};

export default DashboardTopbar;
