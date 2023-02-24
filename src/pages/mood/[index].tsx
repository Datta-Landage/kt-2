import { dividerClasses } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import { useState, useMemo, useEffect } from "react";

function MoodData({ data, query }: any) {
  const [search, setSearch] = useState("");

  const router = useRouter();
  const food = (router.query?.index as string) || "";
  data = data.data;
  let foodData = data.common;

  return (
    <div>
      <div className="grid md:mx-[25rem] grid-col-1 md:grid-col-1 mt-2">
        <label
          for="default-search"
          className="mb-2 text-sm font-medium sr-only "
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search food..."
            onChange={(e) => setSearch(e.target.value)}
            required
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </div>
      <div className="grid gap-12 mx-3 mt-5 grid-col-1 md:grid-col-2 justify-items-center">
        <h1 className="text-[2rem] font-bold">{`List of ${food}s Foods`}</h1>
        <hr className="bg-blue-600  border-2 w-[6rem]  -mt-10" />
        {foodData.length > 0 ? (
          foodData.map((ele: any, index: number) => (
            <div className="flex  relative w-[40rem] border  py-4  rounded-[0.5rem] ">
              <div className="absolute top-0 left-0 md:ml-[15rem] ml-[15rem]  mt-10 break-all ">
                <h1 className="text-[1.5rem] font-bold md:text-2xl ">
                  {ele.food_name}
                </h1>
              </div>

              <div className="ml-24 ">
                <img
                  className="rounded-[0.5rem]"
                  src={ele.photo.thumb}
                  width={110}
                  height={100}
                  alt=""
                />
                {/* <hr className="h-px my-8 bg-gray-900 border-2 dark:bg-gray-700 w-[39rem]"></hr> */}
              </div>
            </div>
          ))
        ) : (
          <div>
            <p className="text-[2rem] font-medium">Sorry! Data not Found </p>
          </div>
        )}
      </div>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  let food = context.params.index;

  const response = await axios({
    url: `http://localhost:5000/getdata?query=${food}`,
    method: "get",
  });
  let data = response.data;

  return {
    props: {
      data: data,
    }, // will be passed to the page component as props
  };
}

export default MoodData;
