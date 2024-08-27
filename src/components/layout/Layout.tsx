import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Menu from "../menu/Menu";
import Footer from "../footer/Footer";
import { useAuth } from "../../context/AuthContext"; // Adjust the import path as needed

const Layout: React.FC = () => {
  const { isAuthenticated } = useAuth(); // Access authentication status

  return (
    <div className="main">
      <Navbar />
      <div className="container">
        <div className="menuContainer">
          <Menu />
        </div>
        <div className="contentContainer">
          <Outlet /> {/* Renders child routes */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
