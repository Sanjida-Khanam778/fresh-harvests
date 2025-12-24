import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Home from "../Pages/Home/Home";
import Shop from "../Pages/Shop/Shop";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import AdminLayout from "../Admin/AdminLayout";
import AllProducts from "../Admin/Products/AllProducts";
import AddProducts from "../Admin/Products/Add/AddProducts";
import Users from "../Admin/User/Users";

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
        path: "shop",
        element: <Shop />,
      },
      {
        path: "about",
        element: <h1>About</h1>,
      },
      {
        path: "blog",
        element: <h1>Blog</h1>,
      },
    ],
  },
  {
    path: "/admin",
    children: [
      {
        index: true,
        element: (
          <AdminLayout>
            <AllProducts />
          </AdminLayout>
        ),
      },
      {
        path: "products",
        element: (
          <AdminLayout>
            <AllProducts />
          </AdminLayout>
        ),
      },
      {
        path: "products/add",
        element: (
          <AdminLayout>
            <AddProducts />
          </AdminLayout>
        ),
      },
      {
        path: "users",
        element: (
          <AdminLayout>
            <Users />
          </AdminLayout>
        ),
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
