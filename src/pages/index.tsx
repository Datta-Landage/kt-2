import Todoform from "@/component/molecules/todoForm";
import TodoList from "@/component/molecules/todoList";
import { useState } from "react";
import Mood from "@/component/atom/mood";
export default function Home() {
  return (
    <div className="grid h-screen mx-8 mt-10 justify-items-center">
      <div className="">
        <div className="flex gap-12">
          <div className=" mr-14">
            {" "}
            <h1 className="text-2xl text-[2.563rem] md:mr-2 font-bold">Todo</h1>
          </div>
          <div className="text-xl md:ml-[11rem] mr-4 text-[2.563rem] font-bold -mt-4">
            <Mood />{" "}
          </div>
        </div>
      </div>
      <Todoform />

      <TodoList />
    </div>
  );
}
