import { createBrowserRouter } from "react-router";
import MainLayout from "../Component/Layouts/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AllProducts from "../Pages/AllProducts";
import MyProducts from "../Pages/MyProducts";
import CreateProducts from "../Pages/CreateProducts";
import MyBids from "../Pages/MyBids";
import ViewDetails from "../Pages/ViewDetails";
import OfferedPrice from "../Pages/OfferedPrice";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/allproducts",
        element: <AllProducts />,
      },
      {
        path: "/myproducts",
        element: <MyProducts />,
      },
      {
        path: "/createproducts",
        element: <CreateProducts />,
      },
      {
        path: "/mybids",
        element: <MyBids />,
      },
      {
        path: "/viewdetails",
        element: <ViewDetails />,
      },
      {
        path: "/offeredprice",
        element: <OfferedPrice />,
      },
    ],
  },
]);
