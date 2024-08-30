import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/globalTheme";
import Layout from "./components/layout/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import LoadingSpinner from "./components/Spinner";
import "./App.css";
import "./styles/global.css";

const Home = lazy(() => import("./pages/home/Home"));
const Users = lazy(() => import("./pages/users/Users"));
const Suppliers = lazy(() => import("./pages/suppliers/Suppliers"));
const Login = lazy(() => import("./pages/login/Login"));
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Router>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<ProtectedRoute element={<Home />} />} />
                <Route
                  path="users"
                  element={<ProtectedRoute element={<Users />} />}
                />
                <Route
                  path="suppliers"
                  element={<ProtectedRoute element={<Suppliers />} />}
                />
                <Route
                  path="dashboard"
                  element={<ProtectedRoute element={<Dashboard />} />}
                />
              </Route>
              <Route path="/login" element={<Login />} />
            </Routes>
          </Suspense>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
