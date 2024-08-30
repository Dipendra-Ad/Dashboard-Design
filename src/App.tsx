import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import Suppliers from "./pages/suppliers/Suppliers";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Layout from "./components/layout/Layout";
import "./App.css";
import "./styles/global.css";

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/suppliers",
          element: <Suppliers />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
