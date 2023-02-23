import { memo } from "react";
import { useStore } from "../store/useStore";
import Dropdown from "../atom/dropDown";
function Todoform() {
  const input = useStore((s) => s.input);
  const setInput = useStore((s) => s.setInput);
  const addTodo = useStore((s) => s.addTodo);

  return (
    <div className="mx-5 mt-2 md:flex">
      <div>
        <input
          className="border border-red-900 hover:border-b-4 py-1 md:mr-8 w-[300px]"
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />

        <button
          className={`m-5 bg-blue-600 text-gray-50 px-10 py-2 ${
            input.length > 0 ? "opacity-100" : "opacity-25"
          }   rounded-[0.5rem]`}
          onClick={addTodo}
        >
          Add
        </button>
        <Dropdown />
      </div>
    </div>
  );
}

export default memo(Todoform);
