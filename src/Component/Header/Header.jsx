import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

export default function Headerdemo() {
  const [isMenuOpen, SetIsMenuOpen] = useState(false);

  const handleMenuToggler = () => {
    SetIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl ">
          <Link to="/" className="flex items-center">
            <img
              src={
                "https://img.freepik.com/premium-vector/dm-modern-minimal-initial-lettering-monogram-logo-md-modern-minimal-initial-lettering-monogram-logo_745848-163.jpg"
              }
              className="mr-3 h-[3.5rem]"
              alt="Logo"
            />
          </Link>

          {/* mobile menu */}
          <div className=" lg:hidden xl:hidden   block">
            <button onClick={handleMenuToggler}>
              {isMenuOpen ? (
                <RxCross1 className="w-5 h-5 text-primary" />
              ) : (
                <FaBarsStaggered className="w-5 h-5 text-primary " />
              )}
            </button>
          </div>

          <div
            className={` justify-center items-center w-full lg:flex xl:flex  xl:w-auto lg:w-auto xl:order-1 lg:order-1 ${
              isMenuOpen ? "" : "hidden"
            }`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row xl:flex-row lg:space-x-8 xl:space-x-8 xl:mt-0 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive
                        ? "text-black pb-2 border-b  border-yellow-400"
                        : "text-gray-700"
                    }  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent  hover:text-black lg:p-0    `
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive
                        ? "text-black border-b  border-yellow-400"
                        : "text-gray-700"
                    }  lg:hover:bg-transparent lg:border-0 hover:text-black lg:p-0  `
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive
                        ? "text-black border-b  border-yellow-400"
                        : "text-gray-700"
                    }   lg:hover:bg-transparent lg:border-0 hover:text-black lg:p-0  `
                  }
                >
                  Project's
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive
                        ? "text-black border-b  border-yellow-400"
                        : "text-gray-700"
                    }  lg:hover:bg-transparent lg:border-0 hover:text-black lg:p-0  `
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
