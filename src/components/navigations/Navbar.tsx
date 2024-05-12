import { useEffect, useState } from "react";

const Navbar = () => {
  const [dateTime, setDateTime] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    if (localStorage.getItem("user") == null) {
      window.location.href = "/";
    } else {
      const val = JSON.parse(localStorage.getItem("user") || "");
      setUser(val);
    }

    const dt = new Date();

    const dd = dt.getDate();
    const mnth = dt.toLocaleString("default", { month: "long" });
    const yy = dt.getFullYear();

    const hrs = dt.getHours() > 12 ? dt.getHours() % 12 : dt.getHours();
    const min = dt.getMinutes() < 10 ? "0" + dt.getMinutes() : dt.getMinutes();
    const AmPm = dt.getHours() >= 12 ? "PM" : "AM";

    const dtString =
      dd + "-" + mnth + "-" + yy + " " + hrs + ":" + min + " " + AmPm;

    setDateTime(dtString);
  }, []);

  return (
    <div className="fixed top-0 z-50 flex h-16 w-full items-center justify-between pl-64 shadow-xl">
      <div className="flex gap-2">
        <span className="flex items-center justify-between">
          <span className="font-bold text-slate-500">Date & Time :</span>&nbsp;
          <span className="flex items-center justify-between text-slate-500">
            <span>{dateTime.split(" ")[0]}</span>&nbsp;
            <span>{dateTime.split(" ")[1] + " " + dateTime.split(" ")[2]}</span>
          </span>
        </span>
      </div>
      <div className="flex cursor-pointer gap-x-1 pr-12">
        <span className="text-[20px] text-slate-500">
          Hello, <span className="uppercase">{user}</span>
        </span>
        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt=""
          className="h-8 w-8 rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default Navbar;
