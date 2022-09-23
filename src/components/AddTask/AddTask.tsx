import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";
import { useSelector, useAppDispatch } from "../../redux/hooks";
import { todoSlice } from "../../redux/Todolist/slice";

export const AddTask: React.FC = () => {
  const dispatch = useAppDispatch();
  const todo = useSelector((s) => s.todo);
  const [input, setInput] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (input.trim().length === 0) {
      return;
    }
    dispatch(todoSlice.actions.addTodo(input));
    setInput("");
  };

  return (
    <form
      className="flex justify-between items-center w-[300px] mt-[25px] mb-[40px] mx-auto bg-white rounded pr-2"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder={"Add new task ..."}
        className="p-2 m-2 bg-inherit border-b-2 border-solid border-[#333] w-[300px] text-[16px] tracking-wider placeholder-[#333]"
        value={input}
        onChange={(e) => setInput(e.currentTarget.value)}
      />
      <button type="submit">
        <PlusIcon className="p-0 border-none w-[27px] h-[27px] bg-blue-900 text-white cursor-pointer" />
      </button>
    </form>
  );
};
