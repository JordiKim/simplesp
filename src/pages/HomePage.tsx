import React from "react";
import { MainLayout } from "../layouts";
import { Link } from "react-router-dom";

export const HomePage: React.FC = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-y-2">
        <h2 className="text-[36px] font-bold">Home</h2>
        <Link to={"/airplane"} className=" w-[150px] bg-blue-500">
          Airplane
        </Link>
        <Link to={"/boat"} className=" w-[150px] bg-blue-500">
          boat
        </Link>
        <Link to={"/todolist"} className=" w-[150px] bg-blue-500">
          todolist
        </Link>
      </div>
    </MainLayout>
  );
};
