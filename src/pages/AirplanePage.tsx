import React from "react";
import { MainLayout } from "../layouts";
import { Airplane } from "../components";

export const AirplanePage: React.FC = () => {
  return (
    <MainLayout>
      <h2 className="text-[36px] font-bold mb-[30px]">Airplane</h2>
      <Airplane />
    </MainLayout>
  );
};
