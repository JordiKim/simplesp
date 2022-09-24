import React from "react";
import { Header, Footer } from "../../components";

interface PropsType {
  children: React.ReactNode;
}

export const MainLayout: React.FC<PropsType> = ({ children }) => {
  return (
    <div className=" my-0 mx-auto w-[860px]">
      <Header />
      <div className="min-h-[70vh]">{children}</div>
      <Footer />
    </div>
  );
};
