import Logo from "../assets/logo.png";
import { MdOutlineSearch } from "react-icons/md";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import { DarkMode } from "./DarkMode";
import { DropDownLinks, Menu } from "../utils/constants";

export const Navbar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-300 relative z-40">
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="/" className="flex gap-2 text-2xl sm:text-3xl font-bold">
              <img src={Logo} alt="logo" className="w-10" />
              shopSy
            </a>
          </div>
          <div className="flex justify-between items-center gap-4 ">
            <div className="group relative hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] group-hover:w-[300px] transition-all duration-400 rounded-full border border-gray-300  px-2 py-1 focus:outline-none focus:border focus:border-orange-400 dark:bg-gray-800 border-none"
              />
              <MdOutlineSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-primary" />
            </div>
            <button className="group flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white py-1 px-3 rounded-full transition-all duration-300">
              <span className="group-hover:block hidden transition-all duration-300">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>

            <DarkMode />
          </div>
        </div>
      </div>
      <div>
        <ul className="sm:flex hidden items-center gap-4 bg-white text-black dark:bg-gray-800 dark:text-white">
          {Menu.map((e) => (
            <li key={e.id}>
              <a
                href={e.payh}
                className="inline-block px-4 hover:text-primary duration-300"
              >
                {e.name}
              </a>
            </li>
          ))}
          <li className="group relative">
            <a href="#" className="flex items-center gap-1 py-2">
              Trending Products
              <span>
                <FaCaretDown className="transition-all duration-300 group-hover:rotate-180" />
              </span>
            </a>

            <div className="absolute z-[9999]  hidden group-hover:block w-[150px] bg-white rounded-md p-2 text-black shadow-md">
              <ul>
                {DropDownLinks.map((el) => (
                  <li key={el.id}>
                    <a
                      href={el.path}
                      className="inline-block w-full hover:bg-primary/20 px-2 rounded-md"
                    >
                      {el.name}{" "}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
