import { useStore } from "@/component/store/useStore";
import { useRouter } from "next/router";
import { memo } from "react";

function DynamicTodo() {
  const router = useRouter();
  const id = (router.query?.id as string) || "";
  const todos = useStore((s) => s.todos);
  return (
    <div>
      <div className=" grid justify-items-center mt-10">
        <div>
          <h1 className="text-[2rem]">
            {todos?.[id]?.name || "Todo not found"}
          </h1>
          <p>{todos?.[id]?.disc}</p>
        </div>
      </div>
    </div>
  );
}

export default memo(DynamicTodo);
