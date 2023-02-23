import Todoform from "@/component/molecules/todoForm";
import TodoList from "@/component/molecules/todoList";
import { useState } from "react";

export default function Home() {
  return (
    <div className="grid justify-items-center mt-10">
      <div className="md:-ml-[470px] ">
        <h1 className="text-xl text-[40px] font-bold">Todo</h1>
      </div>
      <Todoform />

      <TodoList />
    </div>
  );
}
