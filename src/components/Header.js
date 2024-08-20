import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex items-center justify-between bg-white shadow-md p-4 border-b border-gray-200">
      <div className="flex items-center">
        <img className="w-24 h-auto" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="hidden lg:flex items-center space-x-8 text-gray-700">
        <div className="text-lg font-medium hover:text-orange-500 transition duration-300">
          <Link to="/">Home</Link>
        </div>
        <div className="text-lg font-medium hover:text-orange-500 transition duration-300">
          <Link to="/">About</Link>
        </div>
        <div className="text-lg font-medium hover:text-orange-500 transition duration-300">
          <Link to="/">Services</Link>
        </div>
        <div className="text-lg font-medium hover:text-orange-500 transition duration-300">
          <Link to="/">Contact</Link>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition duration-300">
          Login
        </button>
        <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-300">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Header;
