import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Home from "../Pages/Home/Home";
import ProductDetails from "../components/ProductDetails/ProductDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <h1>404</h1>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "product/:id",
        element: <ProductDetails />,
      },
      {
        path: "about",
        element: <h1>About</h1>,
      },
    ],
  },
  {
    path: "/login",
    element: <h1>Login</h1>,
  },
  {
    path: "/register",
    element: <h1>Register</h1>,
  },
]);
