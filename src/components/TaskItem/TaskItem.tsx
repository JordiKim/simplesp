import React from "react";
import { Todo } from "../../redux/Todolist/slice";

interface PropsType {
  data: Todo[];
  complate: (id: string) => void;
  del: (id: string) => void;
}

export const TaskItem: React.FC<PropsType> = ({ data, complate, del }) => {
  return (
    <>
      {data.map((item) => {
        return (
          <div
            key={item.id}
            className={`bg-white w-[80%] h-[60px] flex justify-between items-center tracking-wider py-0 px-[20px] border-2 my-2 ${
              item.completed && "border-red-500 text-primary"
            }`}
            onClick={() => complate(item.id)}
          >
            <div className="flex-grow my-0 mx-[20px]">{item.message}2114</div>
            <button
              className="bg-[#bebebe] border-none rounded-[3px] py-[5px] px-[10px] min-w-min text-white tracking-wider cursor-pointer hover:bg-[#F5727E]"
              onClick={() => del(item.id)}
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
