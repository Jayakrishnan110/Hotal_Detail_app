import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (username === "test" && password === "Test@123") {
      localStorage.setItem("user", JSON.stringify(username));
      window.location.href = "/home";
      toast.success("Login successful!", {
        closeOnClick: true,
        pauseOnHover: false,
        autoClose: 2000,
      });
    } else {
      toast.error("Invalid user credentials , try again", {
        closeOnClick: true,
        pauseOnHover: false,
        autoClose: 2000,
      });
      setUsername("");
      setPassword("");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("user") && window.location.pathname != "/home") {
      const storedUsername = localStorage.getItem("user");
      if (storedUsername) {
        setUsername(JSON.parse(storedUsername));
      }
      toast.info(`Welcome back, ${username}!`, {
        closeOnClick: true,
        pauseOnHover: false,
        autoClose: 2000,
      });
    }
  }, []);

  return (
    <form
      className="my-10 flex w-3/4 flex-col justify-center gap-y-4"
      onSubmit={handleSubmit}
    >
      <label
        htmlFor="username"
        className="text-[15px] font-bold text-slate-500"
      >
        Login Name
      </label>
      <input
        type="text"
        name="username"
        id="username"
        className="w-full rounded-md border-2 border-slate-200 p-2 focus:outline-none"
        autoComplete="off"
        required
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label
        htmlFor="password"
        className="text-[15px] font-bold text-slate-500"
      >
        Password
      </label>
      <input
        type="password"
        name="password"
        id="password"
        className="w-full rounded-md border-2 border-slate-200 p-2 focus:outline-none"
        autoComplete="off"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="submit"
        value="Login"
        className="my-6 cursor-pointer rounded-md border-2 bg-[#7fa7ff] p-4 text-white transition duration-300 ease-in-out hover:bg-white hover:text-[#7fa7ff]"
      />
    </form>
  );
};

export default LoginForm;
