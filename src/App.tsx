import React from "react";
import { HomePage, SignInPage, TodolistPage, AllReactPage, NewsPage, AirplanePage, BoatPage } from "./pages";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";

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
          <Route path="/allreact" element={<AllReactPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/airplane" element={<AirplanePage />} />
          <Route path="/boat" element={<BoatPage />} />
          <Route path="/todolist" element={<TodolistPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
