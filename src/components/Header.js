import { LOGO_URL } from "../utils/constants";
import { useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="flex items-center justify-between bg-white shadow-md p-4 border-b border-gray-200">
      <div className="flex items-center">
        <img className="w-24 h-auto" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="hidden lg:flex items-center space-x-8 text-gray-700 ml-32">
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
          Online Status: {onlineStatus ? "✅" : "🔴"}
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative px-4 font-bold text-xl">
          <Link to="/cart" className="flex items-center">
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l1.38-5H6.62L5 3H3M16 16a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <span className="absolute top-0 right-0 bg-orange-500 text-white rounded-full text-xs px-2 py-0.5">
                {cartItems.length}
              </span>
            </div>
            <span className="ml-2">Cart</span>
          </Link>
        </div>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition duration-300">
          Login
        </button>
        <button className="bg-white  text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-300">
          {loggedInUser}
        </button>
      </div>
    </div>
  );
};

export default Header;
