import { memo, useState } from "react";
import { useStore } from "../store/useStore";
import { useStores } from "../store/checkStore";

import Link from "next/link";
import Checkbox from "../atom/checkBox";
function TodoList() {
  const [name, setName] = useState(false); //true  false
  const [ind, setIndex] = useState(Number); //0 1
  const todos = useStore((s) => s.todos);
  const { isTrue } = useStores();
  console.log("istrue", isTrue, "too", toString);

  return (
    <div className="md:-ml-[40px]  ">
      <ol className="list-decimal">
        {todos.map((todo, index: number) => (
          <div className="flex gap-[100px]">
            <Link href={`/${index}`} key={index}>
              <div className=" w-[150px]">
                {" "}
                {isTrue ? (
                  <li className="md:pr-[40px] text-[22px] line-through">
                    {" "}
                    {todo.name}
                  </li>
                ) : (
                  <li
                    className={`md:pr-[40px] text-[22px] ${
                      name && index == ind ? "line-through" : ""
                    } `}
                  >
                    {" "}
                    {todo.name}
                  </li>
                )}
              </div>
            </Link>
            <div
              className="md:pl-[200px]"
              onClick={() => (setName(!name), setIndex(index))}
            >
              {" "}
              {isTrue ? (
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="w-5 h-5 text-green-500 form-checkbox "
                    checked
                  />
                </label>
              ) : (
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="w-5 h-5 text-green-500 form-checkbox "
                  />
                </label>
              )}
            </div>
          </div>
        ))}
      </ol>
    </div>
  );
}

export default memo(TodoList);