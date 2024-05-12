import { Link, useNavigate } from "react-router-dom";
import Navbar from "../navigations/Navbar";
import Sidebar from "../navigations/Sidebar";
import { useEffect, useState } from "react";

const FacilitiesGroup = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [checkboxActive, setCheckboxActive] = useState(false);

  if (localStorage.getItem("user") == null) {
    window.location.href = "/";
    return null;
  }

  const navigate = useNavigate();

  const handleCreateButtonClick = () => {
    navigate("/facilities_group/create");
  };

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();

      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const handleUsers = async () => {
    try {
      setData(await fetchUsers());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleUsers();
  }, []);

  console.log(data);

  return (
    <div className="flex h-screen w-full flex-wrap items-center">
      <Navbar />
      <Sidebar />
      <div className="ml-64 flex h-screen w-full flex-col px-8 py-28">
        <span className="text-[22px] font-bold text-black/80">
          Facilities Group Master
        </span>
        <div className="my-5 flex w-full items-center gap-x-20 gap-y-5">
          <div className="my-5 flex w-fit items-center gap-x-2 rounded-md border border-[#389cfd] p-1 shadow-md focus:border-[#292d51] focus:shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="ml-2 h-5 w-5 text-slate-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>

            <input
              type="text"
              placeholder="Search"
              className="w-[900px] bg-white p-2 text-[18px] font-normal text-slate-800 outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <button
            className="flex items-center gap-x-1 rounded-md border bg-[#5eb0ff] p-4 text-[16px] text-white transition duration-300 hover:bg-[#3d48af]"
            onClick={handleCreateButtonClick}
          >
            Add New
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-7 w-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        </div>
        <button className="flex w-fit items-center gap-x-1 rounded-md border bg-red-400 p-4 px-8 text-[16px] text-white transition duration-300 hover:bg-red-600">
          Delete
        </button>
        <div className="my-2 flex w-full items-center">
          <table
            cellPadding={10}
            cellSpacing={10}
            className="w-full border-2 text-slate-600"
          >
            <thead className="text-[18px]">
              <tr>
                <th className="flex justify-start gap-4">
                  <input
                    type="checkbox"
                    onClick={() => {
                      setCheckboxActive(!checkboxActive);
                    }}
                  />
                  Srl
                </th>
                <th>Facilities Group Name</th>
                <th>Short Name</th>
                <th>Active</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody className="border-2 text-[18px] uppercase">
              {data?.slice(0, 6).map((user, index) => (
                <tr key={index} className="border-2">
                  <td className="flex justify-start gap-4">
                    {checkboxActive ? (
                      <input type="checkbox" checked />
                    ) : (
                      <input type="checkbox" />
                    )}
                    {index + 1}
                  </td>
                  <td className="text-center">{user["name"]}</td>
                  <td className="text-center">{user["username"]}</td>
                  <td className="text-center">
                    <input type="checkbox" checked disabled />
                  </td>
                  <td className="flex justify-center">
                    <Link to={`/facilities_group/edit/${user["id"]}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                        />
                      </svg>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="my-5 flex w-full items-center justify-between">
          <div className="flex items-center gap-x-1">
            <span>Show</span>
            <select name="show" id="show" className="ml-2 w-[50px] text-[16px]">
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            &nbsp;<span>entries</span>
          </div>
          <div className="flex w-full items-center justify-end p-2 text-slate-600">
            <span className="border-b-2 border-l-2 border-t-2 p-2">
              Previous
            </span>
            <a
              href="#"
              className="border-b-2 border-t-2 bg-[#0d6efd] p-2 px-4 text-white"
            >
              1
            </a>
            <span className="border-b-2 border-r-2 border-t-2 p-2">Next</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilitiesGroup;
