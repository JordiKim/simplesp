import React from "react";
import { AddTask, TaskList } from "../components";

export const TodolistPage: React.FC = () => {
  return (
    <div className=" min-h-screen bg-[#3c5d95] pt-[70px] pb-[70px]">
      <h1 className=" m-0 text-center text-[28px] font-bold tracking-wider text-[#ffc236]">Todolist</h1>
      <AddTask />
      <TaskList />
    </div>
  );
};
