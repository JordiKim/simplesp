import React from "react";
import { Header, Footer } from "../../components";

interface PropsType {
  children: React.ReactNode;
}

export const MainLayout: React.FC<PropsType> = ({ children }) => {
  return (
    <div className="my-0 mx-auto w-full md:w-[768px]">
      <Header />
      <div className="min-h-screen md:min-h-[70vh] px-2">{children}</div>
      <Footer />
    </div>
  );
};
