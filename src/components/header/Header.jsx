import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { LINKS } from "../../static/index";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className="shadow-md sticky top-0 z-50">
      <nav className=" justify-between p-4 bg-gradient-to-r bg-blue-800">
        <div className="text-white font-bold text-xl">
         
        </div>

        <div className="flex gap-4">
          {LINKS?.map((link) => (
            <NavLink
              key={link.id}
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-lg text-lg font-medium transition duration-300 ${
                  isActive
                    ? "bg-white text-indigo-500 shadow-md"
                    : "text-white hover:bg-white/6"
                }`
              }
              to={link.path}
            >
              {link.icon}
              <span>{link.name}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
