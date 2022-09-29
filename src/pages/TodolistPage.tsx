import React from "react";
import { AddTask, TaskList } from "../components";
import { MainLayout } from "../layouts";

export const TodolistPage: React.FC = () => {
  return (
    <MainLayout>
      <h1 className="m-0 text-center text-[36px] font-bold tracking-wider">Todolist</h1>
      <AddTask />
      <TaskList />
    </MainLayout>
  );
};
