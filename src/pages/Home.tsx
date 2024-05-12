import Navbar from "../components/navigations/Navbar";
import Sidebar from "../components/navigations/Sidebar";

const Home = () => {
  if (localStorage.getItem("user") == null) {
    window.location.href = "/";
    return null;
  }

  return (
    <div className="flex h-screen w-full items-center">
      <Navbar />
      <Sidebar />
    </div>
  );
};

export default Home;
