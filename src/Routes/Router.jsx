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
import PrivateRoute from "../PrivateRoute";

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
        element: (
          <PrivateRoute>
            <MyProducts />
          </PrivateRoute>
        ),
      },
      {
        path: "/createproducts",
        element: <CreateProducts />,
      },
      {
        path: "/mybids",
        element: (
          <PrivateRoute>
            <MyBids />
          </PrivateRoute>
        ),
      },
      {
        path: "/viewdetails",
        element: (
          <PrivateRoute>
            <ViewDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/offeredprice",
        element: <OfferedPrice />,
      },
    ],
  },
]);
