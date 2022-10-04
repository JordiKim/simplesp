import React from "react";
import { MainLayout } from "../layouts";

export const HomePage: React.FC = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-y-2">
        <h2 className="text-[36px] font-bold">Home</h2>
        <p>side project web</p>
      </div>
    </MainLayout>
  );
};
