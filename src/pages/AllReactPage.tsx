import React from "react";
import { Link } from "react-router-dom";
import { MainLayout } from "../layouts";

export const AllReactPage: React.FC = () => {
  return (
    <>
      <MainLayout>
        <h2 className=" text-[36px] font-bold">All Reacts</h2>
        <Link
          to={"/todolist"}
          className=" block py-[2px] px-[16px] my-[20px] mx-[10px] bg-[#fff] border-l-[8px] border-[#fff] hover:border-[#4979ff]"
        >
          <h4 className=" text-[18px] font-bold my-4">todolist</h4>
        </Link>
      </MainLayout>
    </>
  );
};
