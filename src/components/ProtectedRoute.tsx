import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
//import { log } from "../utils/log";

interface ProtectedRouteProps {
  element: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const { isAuthenticated } = useAuth();

  // log("ProtectedRoute - isAuthenticated:", isAuthenticated);

  return isAuthenticated ? element : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
