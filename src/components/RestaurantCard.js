import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData;

  return (
    <div className="relative m-4 p-4 w-[250px] rounded-lg bg-white shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
      <img
        className="w-full h-[150px] object-cover rounded-t-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="p-4">
        <h3 className="font-bold text-xl text-gray-800">{name}</h3>
        <p className="text-gray-600 text-sm mb-2">{cuisines.join(", ")}</p>
        <div className="flex items-center mb-2">
          <span className="text-orange-500 font-semibold">{avgRating}</span>
          <span className="text-gray-600 ml-1">stars</span>
        </div>
        <div className="flex justify-between text-gray-600 text-sm mb-2">
          <span>{costForTwo}</span>
          <span>{sla.deliveryTime} mins</span>
        </div>
      </div>
    </div>
  );
};

export const withPromtedLabel = (RestaurantCard) => {
  return (props) => {
    return (
        <div className="relative">
        <label className="absolute top-0 left-0 z-50 bg-orange-400 text-white text-xs font-bold uppercase rounded-br-lg py-1 px-2 m-2">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
