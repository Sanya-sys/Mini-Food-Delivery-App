import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
  const { data, showItems, setShowIndex } = props;
  const handleClick = () => {
    setShowIndex()
  }

  return (
    <div>
      <div className="w-6/12 mx-auto my-6 bg-white shadow-xl rounded-lg p-4">
        <div className="flex justify-between items-center cursor-pointer hover:bg-gray-100 transition-all duration-300 p-2 rounded-md">
          <span className="font-semibold text-lg text-gray-800">
            {data.title} ({data.itemCards.length})
          </span>
          <span
            onClick={handleClick}
            className="text-gray-500 transform transition-transform duration-300"
          >
            ⬇️
          </span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantCategory;
