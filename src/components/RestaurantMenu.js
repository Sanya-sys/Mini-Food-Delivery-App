import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const toggleShowIndex = (index) => {
    const val = index === showIndex ? "" : index;
    setShowIndex(val);
  };

  return (
    <div className="my-8 text-center">
      <h1 className="font-bold my-6 text-3xl text-orange-500">{name}</h1>
      <p className="font-semibold text-xl text-gray-600">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <div className="mt-8">
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category.card.card.data}
            data={category.card.card}
            showItems={index === showIndex}
            setShowIndex={() => toggleShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenu;
