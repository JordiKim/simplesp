import React from "react";
import { Link } from "react-router-dom";
import { MainLayout } from "../layouts";
interface IAllReactPageItemPropsType {
  address: string;
  title: string;
}

export const AllReactPage: React.FC = () => {
  const AllReactPageItem: React.FC<IAllReactPageItemPropsType> = (prop) => {
    const { address, title } = prop;
    return (
      <Link
        to={address}
        className=" block py-[2px] px-[16px] my-[20px] mx-[10px] bg-[#fff] border-l-[8px] border-[#fff] hover:border-[#4979ff]"
      >
        <h4 className=" text-[18px] font-bold my-4">{title}</h4>
      </Link>
    );
  };

  return (
    <>
      <MainLayout>
        <h2 className="text-[36px] font-bold">All Reacts</h2>
        <AllReactPageItem address="/" title="home" />
        <AllReactPageItem address="/todolist" title="todolist" />
        <AllReactPageItem address="/news" title="news" />
        <AllReactPageItem address="/Airplane" title="Airplane" />
        <AllReactPageItem address="/boat" title="boat" />
      </MainLayout>
    </>
  );
};
