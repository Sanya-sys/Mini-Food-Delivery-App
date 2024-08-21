import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-4 m-2 border-gray-200 border-b-2 text-left flex justify-between items-center"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-semibold text-lg text-gray-800">
                {item.card.info.name}
              </span>
              <span className="text-gray-500 ml-2">
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-1">
              {item.card.info.description}
            </p>
          </div>
          <div className="w-3/12 relative">
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-16 h-16 object-cover rounded-lg"
              alt={item.card.info.name}
            />
            {!location.pathname === "/cart" && (
              <button
                onClick={() => handleAddItem(item)}
                className="absolute bottom-2 right-2 p-2 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600 transition-colors duration-200"
              >
                Add +
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
