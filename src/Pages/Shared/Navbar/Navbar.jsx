import { NavLink } from "react-router-dom";
import { GoSearch, GoHeart } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const navItems = [
    { path: "/", text: "Home" },
    { path: "/contact", text: "Contact" },
    { path: "/about", text: "About" },
    { path: "/sign-up", text: "Sign Up" },
  ];

  return (
    <div>
      <nav className="flex flex-wrap items-center justify-between py-2 mb-4 text-black transition-colors duration-300 border-b-2 mt-9 border-b-secondary dark:bg-bgDark dark:text-textLight ">
        <h1 className="hidden text-2xl font-semibold md:block">Exclusive</h1>

        {/* HAMBURGER MENU */}
        <button className="text-xl md:hidden" onClick={toggleSidebar}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* DESKTOP NAVIGATION */}
        <ul className="items-center justify-between hidden gap-12 list-none md:flex">
          {navItems.map((el, i) => (
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-b-bgDark transition duration-300"
                  : "border-b-2 border-b-transparent"
              }
              to={el.path}
              key={i}
            >
              {el.text}
            </NavLink>
          ))}
        </ul>

        <div className="flex items-center justify-between w-full gap-6 mt-3 lg:mt-0 lg:w-auto">
          <div className="relative mr-auto">
            <input
              className="block pl-5 pr-3 py-[7px] rounded-md bg-secondaryPink placeholder:text-xs placeholder:text-textGray outline-none transition duration-300 focus:ring-1 focus:ring-textDark text-textDark text-md
              sm:w-96 md:w-[450px] lg:w-auto
              "
              type="text"
              placeholder="What are you looking for?"
            />
            <GoSearch className="absolute right-3 top-[25%] text-2xl" />
          </div>

          <button onClick={toggleDarkMode} className="text-2xl">
            {darkMode ? <FaMoon /> : <FaSun />}
          </button>

          <div className="flex items-center gap-4 text-2xl">
            <GoHeart />
            <IoCartOutline />
          </div>
        </div>
      </nav>

      {/* SIDEBAR ITEMS */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-bgLight dark:bg-bgDark dark:text-textLight transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:hidden z-50`}
      >
        <button
          className="absolute text-xl top-4 right-4"
          onClick={toggleSidebar}
          aria-label="Close Menu"
        >
          <FaTimes />
        </button>
        <ul className="flex flex-col items-start gap-6 p-6 mt-10">
          {navItems.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              onClick={toggleSidebar} // Close sidebar on click
              className={({ isActive }) =>
                isActive
                  ? "dark:text-textLight text-primaryDark font-semibold"
                  : " text-textGray hover:text-primaryDark"
              }
            >
              {item.text}
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
