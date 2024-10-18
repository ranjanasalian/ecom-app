import React from "react";
import { Outlet } from "react-router-dom";
import TaskBar from "./TaskBar";
import "../styles/AdminLayout.css";

export default function AdminLayout() {
  return (
    <div className="admin-layout">
      <TaskBar />
      <div className="admin-content">
        <Outlet />
      </div>
    </div>
  );
}
