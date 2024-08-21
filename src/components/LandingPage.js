import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RestaurantCard, { withPromtedLabel } from "./RestaurantCard";

const LandingPage = () => {
  const [restaurantList, setListOfRestraunt] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, updateSearchText] = useState("");

  const RestaurantCardPromoted = withPromtedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (searchText.length === 0) {
      setFilteredRestaurant(restaurantList);
    } else {
      const filteredData = restaurantList.filter((res) =>
        res.info.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredRestaurant(filteredData);
    }
  }, [searchText]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonInfo = await data.json();

    setListOfRestraunt(
      jsonInfo?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurant(
      jsonInfo?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const updateInput = (e) => {
    updateSearchText(e.target.value);
  };

  const updateFilteredData = () => {
    if (searchText.length === 0) {
      setFilteredRestaurant(restaurantList);
    } else {
      const filteredData = restaurantList.filter((res) =>
        res.info.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredRestaurant(filteredData);
    }
  };

  return (
    <div>
      <div className="search m-4 p-4 flex items-center justify-center space-x-4">
        <input
          type="text"
          className="border border-gray-300 rounded-lg px-4 py-2 w-full max-w-xs sm:max-w-sm lg:max-w-md focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-300 ease-in-out"
          placeholder="Search..."
          value={searchText}
          onChange={updateInput}
        />
        <button
          className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition duration-300 ease-in-out"
          onClick={updateFilteredData}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant, index) => (
          <Link key={restaurant?.info.id} to={"/restaurant/" + restaurant.info.id}>
            {restaurant.info?.avgRating > "4.3" ? (
              <RestaurantCardPromoted resData={restaurant.info} key={index} />
            ) : (
              <RestaurantCard resData={restaurant.info} key={index} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
