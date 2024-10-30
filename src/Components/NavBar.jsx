import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const NavBar = () => {
  // Routes Line Page Path
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "./About", name: "About" },
    { id: 3, path: "/Subscribe", name: "Services" },
    { id: 4, path: "./contact", name: "Contact" },
    { id: 5, path: "/Users", name: "Users" },
  ];

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="origin-top scale-95">
          <div
            className="btn btn-ghost lg:hidden"
            onClick={() => setOpenMenu(!openMenu)}
          >
            {openMenu ? <RxCross2 /> : <FaBars />}
          </div>
          <ul
            className={`menu menu-sm absolute bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow  ${
              openMenu ? "" : "hidden"
            }`}
          >
            {routes.map((route) => (
              <li key={route.id}>
                <a href={route.path}>{route.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Ab Nahid</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {routes.map((route) => (
            <li key={route.id}>
              <a href={route.path}>{route.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Login</a>
      </div>
    </div>
  );
};

export default NavBar;
