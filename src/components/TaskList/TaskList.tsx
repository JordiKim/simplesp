import React from "react";
import { TaskItem } from "../../components";
import { useSelector, useAppDispatch } from "../../redux/hooks";
import { todoSlice } from "../../redux/Todolist/slice";

export const TaskList: React.FC = () => {
  const dispatch = useAppDispatch();
  const data = useSelector((s) => s.todo);

  if (data.length === 0) {
    return <h2 className="text-center my-3 text-red-500 text-[28px]">LIST IS EMPTY</h2>;
  }

  const handleComplete = (i) => {
    dispatch(todoSlice.actions.completeTodo(i));
  };

  const handleDel = (i) => {
    dispatch(todoSlice.actions.deleteTodo(i));
  };

  return (
    <div className="my-0 mx-auto">
      <div className="flex flex-col-reverse items-center py-[30px] px-0 bg-[#f8f8f8]">
        <TaskItem data={data} complate={handleComplete} del={handleDel} />
      </div>
    </div>
  );
};
