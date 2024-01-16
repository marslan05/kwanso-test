import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Table from "../components/table";
import { RandomUserApi, RandomUserApiByPage } from "../utils/utils";
import { USER } from "../types/user.types";
const Listing: React.FC = () => {
  const [originalData, setOriginalData] = useState<USER[]>([]);
  const [userData, setUserData] = useState<USER[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [genderFilter, setGenderFilter] = useState<string>("");

  const fetchUserData = async () => {
    setLoading(true);
    try {
      const data = await RandomUserApi();
      setUserData(data?.data);
      setOriginalData(data?.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {
    if (searchText === "") {
      setUserData(originalData);
    } else {
      const filtered = originalData.filter((record) =>
        Object.values(record).some((value) =>
          value.toString().toLowerCase().includes(searchText.toLowerCase())
        )
      );
      setUserData(filtered);
    }
  }, [searchText, originalData]);

  const fetchNewData = async (newPage: number) => {
    setCurrentPage(newPage);
    setLoading(true);
    try {
      const data = await RandomUserApiByPage(newPage);
      if (genderFilter) {
        const filteredData = originalData?.filter(
          (item) => item?.gender === genderFilter
        );
        setUserData(filteredData);
        setOriginalData(data?.data);
      } else {
        setUserData(data?.data);
        setOriginalData(data?.data);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (genderFilter) {
      const filteredData = originalData?.filter(
        (item) => item?.gender === genderFilter
      );
      setUserData(filteredData);
    } else {
      setUserData(originalData);
    }
  }, [genderFilter , originalData]);

  const pagination = [1, 2, 3, 4, 5];

  const handleGenderFilter = () => {
    setGenderFilter(genderFilter === "male" ? "female" : "male");
  };
  return (
    <div className="App h-full min-h-screen w-full">
      <Header />

      {loading ? (
        <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8 pt-10">
          <div
            role="status"
            className="flex align-middle justify-center items-center"
          >
            <svg
              aria-hidden="true"
              className="w-14 h-14 text-gray-200 animate-spin dark:text-gray-300 fill-blue-500"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          </div>
        </div>
      ) : (
        <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8 pt-10">
          <div className="sm:flex sm:items-center">
            <div className="w-full sm:flex-auto">
              <h1 className="text-base font-semibold leading-6 text-gray-900">
                Users
              </h1>
            </div>
            <div className="mt-4 flex align-middle justify-end items-center gap-3 w-full sm:mt-0 sm:flex-none">
              <input
                onChange={(e) => setSearchText(e.target.value)}
                type="text"
                name="search"
                value={searchText}
                id="search"
                className="block w-max rounded-md py-1.5 px-4 text-gray-600 shadow-sm ring-0 placeholder:text-gray-400 outline-none border border-gray-200"
              />
              {genderFilter ? (
                <button
                  onClick={() => {
                    setGenderFilter("");
                  }}
                  className="inline-flex items-center rounded-md bg-blue-600 px-2 py-1 text-sm w-max font-semibold text-white"
                >
                  Reset Filter
                </button>
              ) : null}
            </div>
          </div>
          <Table handleGenderFilter={handleGenderFilter} data={userData} />
          <nav
            className=" flex justify-end w-full py-5 border-t border-gray-200 "
            aria-label="Pagination"
          >
            <span
              onClick={() => {
                if (currentPage > 1) {
                  fetchNewData(currentPage - 1);
                }
                // fetchNewData(currentPage - 1);
              }}
              className="relative inline-flex items-center cursor-pointer rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_416_3548)">
                  <mask
                    id="mask0_416_3548"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="16"
                    height="16"
                  >
                    <path d="M16 0H0V16H16V0Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_416_3548)">
                    <path
                      d="M10.5001 13.4L4.6001 7.99998L10.5001 2.59998L11.4001 3.49998L6.5001 7.99998L11.4001 12.5L10.5001 13.4Z"
                      fill="black"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_416_3548">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
            {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
            {pagination?.map((item: number) => {
              return (
                <span
                  key={item}
                  aria-current="page"
                  onClick={() => fetchNewData(item)}
                  className={`${
                    currentPage === item
                      ? "relative z-10 inline-flex items-center cursor-pointer bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      : "relative cursor-pointer inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  } `}
                  // className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {item}
                </span>
              );
            })}
            <span
              onClick={() => {
                if (currentPage < 5) {
                  fetchNewData(currentPage + 1);
                }
              }}
              className="relative inline-flex cursor-pointer items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_416_3555)">
                  <mask
                    id="mask0_416_3555"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="16"
                    height="16"
                  >
                    <path d="M16 0H0V16H16V0Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_416_3555)">
                    <path
                      d="M5.5001 13.4L4.6001 12.5L9.5001 7.99998L4.6001 3.49998L5.5001 2.59998L11.4001 7.99998L5.5001 13.4Z"
                      fill="black"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_416_3555">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Listing;
