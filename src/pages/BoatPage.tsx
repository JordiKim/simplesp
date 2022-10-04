import React from "react";
import { MainLayout } from "../layouts";
import { Boat } from "../components";

export const BoatPage: React.FC = () => {
  return (
    <MainLayout>
      <h2 className="text-[36px] font-bold mb-[30px]">Boat</h2>
      <Boat />
    </MainLayout>
  );
};
