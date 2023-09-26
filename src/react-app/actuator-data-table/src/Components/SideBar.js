import React from "react";
import { NavLink } from "react-router-dom";

export default function SideBar() {
  const menuItem = [
    {
      path: "/health",
      name: "Health",
    },
    {
      path: "/metrics",
      name: "Metrics",
    },

    {
      path: "/bean",
      name: "Beans",
    },
    {
      path: "/cache",
      name: "Caches",
    },
    {
      path: "/env",
      name: "Environment",
    },
    {
      path: "/heap",
      name: "Heap Dump",
    },
    {
      path: "/exchange",
      name: "Http Exchange",
    },
    {
      path: "/info",
      name: "Information",
    },
  ];
  return (
    <div className="container">
      <div className="sidebar">
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="link_text">{item.name}</div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
