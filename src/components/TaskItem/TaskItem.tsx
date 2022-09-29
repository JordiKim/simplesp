import React, { useEffect } from "react";
import { useSelector, useAppDispatch } from "../../redux/hooks";
import { todoSlice } from "../../redux/Todolist/slice";

export const TaskItem: React.FC = (props) => {
  const dispatch = useAppDispatch();
  const todo = useSelector((s) => s.todo);

  if (todo.length === 0) {
    return <h2 className="text-center my-3 text-red-500 text-[28px]">LIST IS EMPTY</h2>;
  }

  return (
    <>
      {todo.map((item) => {
        return (
          <div
            key={item.id}
            className={`bg-white w-[80%] h-[60px] flex justify-between items-center tracking-wider py-0 px-[20px] border-2 my-2 ${
              item.completed && "border-red-500 text-primary"
            }`}
            onClick={() => dispatch(todoSlice.actions.completeTodo(item.id))}
          >
            <div className=" flex-grow my-0 mx-[20px]">{item.message}</div>
            <button
              className="bg-[#bebebe] border-none rounded-[3px] py-[5px] px-[10px] min-w-min text-white tracking-wider cursor-pointer hover:bg-[#F5727E]"
              onClick={() => dispatch(todoSlice.actions.deleteTodo(item.id))}
            >
              Delete
            </button>
          </div>
        );
      })}
      {/* <button onClick={() => dispatch(todoSlice.actions.sort())}>Sort</button> */}
    </>
  );
};
