import { useSelector, useDispatch } from "react-redux";
import clearCart from '../utils/cartSlice'

import ItemList from "./ItemList";

const CartData = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch()

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  return (
    <div className="text-center m-6 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-orange-500 mb-4">Your Cart</h1>
      <div className="w-10/12 lg:w-8/12 m-auto">
        {cartItems?.length === 0 ? (
          <h2 className="text-xl text-gray-600">Your cart is empty. Add some delicious items!</h2>
        ) : (
          <>
            <ItemList items={cartItems} />
            <button onClick={handleClearCart} className="p-3 mt-6 w-full bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 transition duration-300">
              Clear Cart
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CartData;
