import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LandingPage from './components/LandingPage';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
      ],
    },
  ]);
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  root.render(<RouterProvider router={appRouter} />);

reportWebVitals();
