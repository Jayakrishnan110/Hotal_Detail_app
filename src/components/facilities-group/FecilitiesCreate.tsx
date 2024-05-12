import { Link } from "react-router-dom";
import Navbar from "../navigations/Navbar";
import Sidebar from "../navigations/Sidebar";
import { useState } from "react";

const FecilitiesCreate = () => {
  const [clicked1, setClicked1] = useState(false);
  const [clicked2, setClicked2] = useState(false);

  if (localStorage.getItem("user") == null) {
    window.location.href = "/";
    return null;
  }

  return (
    <div className="flex h-screen w-full items-center">
      <Navbar />
      <Sidebar />
      <div className="ml-64 flex h-screen w-full flex-col px-8 py-28">
        <Link to="/facilities_group">
          <span className="rounded-md bg-[#7fa7ff] p-4 px-16 text-white">
            Back
          </span>
        </Link>
        <span className="my-10 text-[22px] font-semibold text-black/80">
          Facilities Group Master
        </span>

        <form
          action=""
          className="flex w-1/2 flex-col justify-center gap-x-20 gap-y-2"
        >
          <label htmlFor="gname" className="text-[15px] text-slate-700">
            Facility Group Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="gname"
            id="gname"
            className="rounded-md border-2 border-[#7fa7ff] p-2 outline-none"
          />
          <label htmlFor="sname" className="text-[15px] text-slate-700">
            Short Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="sname"
            id="sname"
            className="rounded-md border-2 border-[#7fa7ff] p-2 outline-none"
          />
          <div className="flex w-1/2 justify-between">
            <span>
              <input type="checkbox" onClick={() => setClicked1(!clicked1)} />{" "}
              Tax Applicable
            </span>
            <span>
              <input type="checkbox" onClick={() => setClicked2(!clicked2)} />{" "}
              Tax After Discount
            </span>
          </div>
          <span className="my-5 flex items-center gap-x-2">
            Active
            <input type="checkbox" />
          </span>
        </form>

        <table
          cellPadding={10}
          cellSpacing={10}
          className="mx-auto w-1/2 border-2 text-slate-600"
        >
          <thead className="text-[18px]">
            <tr>
              <th>Srl</th>
              <th>Tax Name</th>
              <th>Tax %</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className="border-2 text-[18px] uppercase">
            <tr>
              <td className="text-center">1</td>
              <td className="text-center">
                {clicked1 && clicked2 ? (
                  <select
                    name=""
                    id=""
                    className="w-full rounded-md border-2 border-[#7fa7ff] bg-white p-2 text-[15px] uppercase text-slate-600 outline-none"
                  >
                    <option value="">select</option>
                    <option value="">other</option>
                    <option value="">cess</option>
                    <option value="">igst</option>
                    <option value="">sgst</option>
                    <option value="">cgst</option>
                    <option value="">sgst 9%</option>
                    <option value="">cgst 9%</option>
                  </select>
                ) : (
                  <select
                    name=""
                    id=""
                    className="w-full rounded-md border-2 border-[#7fa7ff] bg-white p-2 text-[15px] uppercase text-slate-600 outline-none"
                    disabled
                  >
                    <option value="">select</option>
                    <option value="">other</option>
                    <option value="">cess</option>
                    <option value="">igst</option>
                    <option value="">sgst</option>
                    <option value="">cgst</option>
                    <option value="">sgst 9%</option>
                    <option value="">cgst 9%</option>
                  </select>
                )}
              </td>
              <td className="text-center">
                {clicked1 && clicked2 ? (
                  <input
                    type="text"
                    placeholder="0.00"
                    className="rounded-md border-2 border-[#7fa7ff] p-2 text-[15px] text-slate-600 outline-none"
                  />
                ) : (
                  <input
                    type="text"
                    placeholder="0.00"
                    className="rounded-md border-2 border-[#7fa7ff] p-2 text-[15px] text-slate-600 outline-none"
                    disabled
                  />
                )}
              </td>
              <td className="my-2 flex items-center justify-center">
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5 text-[#253e74]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <Link to="/facilities_group" className="ml-auto">
          <span className="rounded-md bg-[#7fa7ff] p-4 px-16 text-white">
            Save
          </span>
        </Link>
      </div>
    </div>
  );
};

export default FecilitiesCreate;
