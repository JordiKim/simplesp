import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/blog_logo.jpg";
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";

export const Header: React.FC = () => {
  const [hamburgerNav, setHamburgerNav] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 1024 && setHamburgerNav(false));
  }, []);

  const HamburgerNavFn = () => {
    if (hamburgerNav === false) {
      return (
        <div className="flex flex-col items-end bg-white absolute right-0 top-[-300px] transition-all -z-10">
          <ul className="menu bg-base-100 w-56">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
      );
    }
    return (
      <div className="flex flex-col items-end bg-white absolute right-0 top-0 transition-all z-0">
        <ul className="menu bg-base-100 w-56">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <>
      <header className="bg-[#3c3c3c] grid grid-cols-2 px-3">
        <div className="w-16 h-16">
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="flex flex-col justify-center ml-auto">
          <Bars3BottomRightIcon
            className="h-8 w-8 mx-auto text-white cursor-pointer bg-primary lg:hidden"
            onClick={() => {
              setHamburgerNav(() => !hamburgerNav);
            }}
          />
        </div>
      </header>
      <div className="relative">{HamburgerNavFn()}</div>
    </>
  );
};
