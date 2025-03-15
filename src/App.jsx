import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import DashBoard from "./components/DashBoard";

import { Provider } from "react-redux";
import store from "./store/store";
import Login from "./components/Accounts/Login";
import Signup from "./components/Accounts/Signup";
import List from "./components/Product/List";
import Add from "./components/Product/Add";
import Edit from "./components/Product/Edit";
import View from "./components/Product/View";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/dashboard",
      element: <DashBoard />,
    },
   
    {
      path: "/createOrder",
      element: <Add />,
    },
    
    {
      path: "/Lists",
      element: <List />,
    },

    {
      path: "/product_edit/:id",
      element:  <Edit /> ,
    },
    {
      path: "/product_view/:id",
      element:  <View /> ,
    },
    
  ]);
  return (
    <Provider store={store}>
      <RouterProvider router={router} />;
    </Provider>
  );
}

export default App;
