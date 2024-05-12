import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [active, setActive] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <div className="fixed mt-32 min-h-screen w-1/6 select-none bg-[#88c2f9]">
      <ul className="flex flex-col justify-between">
        <li
          className={`flex cursor-pointer items-center justify-between p-3 text-[14px] font-semibold text-white transition duration-300 hover:bg-[#3b4078] ${active ? "bg-[#3b4078]" : ""}`}
          onClick={() => setActive(!active)}
        >
          <span>Master</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={`h-4 w-4 text-white ${active ? "rotate-90" : ""}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </li>
        {active && (
          <Link
            to="/facilities_group"
            className="font ml-4 p-3 text-[14px] font-semibold text-white transition duration-300 hover:text-[#0a58ca]"
          >
            Facilities Group
          </Link>
        )}
      </ul>
      <hr />

      <button
        className="mx-auto my-5 flex w-3/4 items-center justify-center gap-2 rounded-md bg-white p-2 text-[14px] font-medium text-black transition duration-300 hover:bg-black hover:text-white"
        onClick={handleLogout}
      >
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
            d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
          />
        </svg>
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
