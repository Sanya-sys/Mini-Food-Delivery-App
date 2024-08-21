import Header from "./components/Header.js";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import UserContext from "./utils/userContext";
import appStore from "./utils/appStore";
import { useEffect, useState } from "react";

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const name = "Sanya"; // consider data coming from BE
    setUserName(name);
  }, []);
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
}

export default App;
