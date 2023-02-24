import { memo, useState } from "react";
import { useStore } from "../store/useStore";
import { useStores } from "../store/checkStore";
import { RiTimerFill } from "react-icons/ri";

import Link from "next/link";

function TodoList() {
  const [name, setName] = useState(false);
  const todos = useStore((s) => s.todos);
  const isTrue = useStores((s: any) => s.isTrue);

  function handleTimeChange(index: number) {
    for (let i = 0; i < todos.length; i++) {
      const obj = todos[i];
      if (index === i && obj.hasOwnProperty("isTime")) {
        obj.isTime = !obj.isTime;
        console.log("obj", obj);
      }
    }
  }

  const HandleInput = (index: number) => {
    setName(!name);
    for (let i = 0; i < todos.length; i++) {
      const obj = todos[i];
      if (index === i && obj.hasOwnProperty("isCompleted")) {
        obj.isCompleted = !obj.isCompleted;
      }
    }
  };
  return (
    <div className="md:-ml-[2.5rem] -mt-[22rem] ">
      <ol className="list-decimal ">
        {todos.map((todo, index: number) => (
          <div className="flex gap-[6.25rem]">
            <Link href={`/mood/${todo.name}`} key={index}>
              <div className=" w-[9.375rem] ">
                {" "}
                {isTrue ? (
                  <li className="md:pr-[2.5rem] text-[1.375rem] line-through">
                    {" "}
                    {todo.name}
                  </li>
                ) : (
                  <li
                    className={`md:pr-[2.5rem] text-[1.375rem] ${
                      todo.isCompleted ? "line-through" : ""
                    } `}
                  >
                    {" "}
                    {todo.name}
                  </li>
                )}
              </div>
            </Link>

            <div
              className="md:pl-[12.5rem]   "
              onClick={() => HandleInput(index)}
            >
              {" "}
              {isTrue ? (
                <label className="">
                  <input
                    type="checkbox"
                    className="w-5 h-5 text-green-500 form-checkbox "
                    checked
                  />
                </label>
              ) : (
                <label className="">
                  <input
                    type="checkbox"
                    className="w-5 h-5 text-green-500 form-checkbox "
                  />
                </label>
              )}
            </div>
            <div>
              <RiTimerFill></RiTimerFill>
            </div>
          </div>
        ))}
      </ol>
    </div>
  );
}

export default memo(TodoList);
