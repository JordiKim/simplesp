import React from "react";
import { HomePage, SignInPage } from "./pages";
import { Airplane, Boat } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <>
      <h1>NotFound</h1>
    </>
  );
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/airplane" element={<Airplane />} />
          <Route path="/boat" element={<Boat />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
