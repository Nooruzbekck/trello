import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";
import { RegisterPage } from "../pages/RegisterPage";
import { LoginPage } from "../pages/LoginPage";
import { PrivateAuthRoute } from "./private/PrivateAuthRoute";
import { UserRoutes } from "./UserRoutes";
import { AdminRoutes } from "./AdminRoutes";

export const AppRoutes = () => {
  const { role } = useSelector((state: RootState) => state.auth);

  const pathsByRole = {
    ADMIN: "/admin",
    USER: "/user",
    GUEST: "/sign-in",
  };

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/boards" replace />,
    },
    {
      path: "/boards",
      element: (
        <PrivateAuthRoute
          Component={<MainLayout />}
          fallBackPath={pathsByRole[role]}
          isAuthorized={role === "USER"}
        />
      ),
      children: UserRoutes(role),
    },
    {
      path: "/admin",
      element: (
        <PrivateAuthRoute
          Component={<MainLayout />}
          fallBackPath={pathsByRole[role]}
          isAuthorized={role === "ADMIN"}
        />
      ),
      children: AdminRoutes(role),
    },
    {
      path: "/sign-up",
      element: (
        <PrivateAuthRoute
          Component={<RegisterPage />}
          fallBackPath={pathsByRole[role]}
          isAuthorized={role === "GUEST"}
        />
      ),
    },
    {
      path: "/sign-in",
      element: (
        <PrivateAuthRoute
          Component={<LoginPage />}
          fallBackPath={pathsByRole[role]}
          isAuthorized={role === "GUEST"}
        />
      ),
    },
    {
      path: "*",
      element: <h1>Not Found</h1>,
    },
  ]);

  return <RouterProvider router={routes} />;
};
