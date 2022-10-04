import React from "react";
import { TaskItem } from "../../components";

export const TaskList: React.FC = () => {
  return (
    <div className="my-0 mx-auto">
      <div className="flex flex-col-reverse items-center py-[30px] px-0 bg-[#f8f8f8]">
        <TaskItem />
      </div>
    </div>
  );
};
