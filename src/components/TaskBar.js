import React, { useState } from "react";
import "../styles/TaskBar.css";
import { MdDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { MdAddToPhotos } from "react-icons/md";
import Logo from "../assets/logo/NovaNest.png";
import { NavLink } from "react-router-dom";

export default function TaskBar() {
  const [isExpanded, setIsExpanded] = useState(false);

  function toggleSidebar() {
    setIsExpanded(!isExpanded);
  }

  return (
    <div className={isExpanded ? "sidebar expanded" : "sidebar collapsed"}>
      <div className="sidebar-header">
        <img src={Logo} alt="Logo" className="logo" onClick={toggleSidebar} />
      </div>
      <ul className="menu-list">
        <li className="menu-item">
          <i className="icon dashboard-icon">
            <MdDashboard />
          </i>
          {isExpanded && (
            <span>
              <NavLink to="/admin">Dashboard</NavLink>
            </span>
          )}
        </li>
        <li className="menu-item">
          <i className="icon user-icon">
            <FaUsers />
          </i>
          {isExpanded && <span>User Accounts</span>}
        </li>
        <li className="menu-item">
          <i className="icon product-icon">
            <MdAddToPhotos />
          </i>
          {isExpanded && (
            <span>
              <NavLink to="/admin/adminaddproduct">Products</NavLink>
            </span>
          )}
        </li>
      </ul>
      {isExpanded && (
        <div className="sidebar-footer">
          <img src="profile-image-url" alt="Profile" className="profile-img" />
          <span>Profile Name</span>
        </div>
      )}
    </div>
  );
}
