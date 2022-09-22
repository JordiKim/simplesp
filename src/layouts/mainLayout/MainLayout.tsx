import React from "react";
import { Header, Footer } from "../../components";

interface PropsType {
  children: React.ReactNode;
}

export const MainLayout: React.FC<PropsType> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="px-[10px] lg:px-[5px]">{children}</div>
      <Footer />
    </>
  );
};
