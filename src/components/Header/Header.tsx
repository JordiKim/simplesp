import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/blog_logo.jpg";

export const Header: React.FC = () => {
  return (
    <>
      <header className="mt-0 mb-[80px] mx-auto py-[10px] px-0 flex justify-end items-end border-b-[1px] border-[#ddd]">
        <div className="w-16 h-16 ml-1">
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="flex flex-col justify-center ml-auto">
          <nav className="flex gap-2">
            <Link to={"/"}>
              <div>Home</div>
            </Link>
            <Link to={"/allreact"}>
              <div>All React</div>
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};
