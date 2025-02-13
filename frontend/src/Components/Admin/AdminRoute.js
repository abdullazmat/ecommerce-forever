import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

function AdminRoute() {
  const { admin } = useSelector((state) => state.admin);
  return admin ? <Outlet /> : <Navigate to="/admin-panel" />;
}

export default AdminRoute;
