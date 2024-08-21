import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import LandingPage from "./components/LandingPage";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CartData from "./components/CartData";
import reportWebVitals from "./reportWebVitals";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <CartData />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

reportWebVitals();
