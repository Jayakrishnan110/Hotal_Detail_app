import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/login/Login";
import Home from "./pages/Home";
import FacilitiesGroup from "./components/facilities-group/FacilitiesGroup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FacilitiesEdit from "./components/facilities-group/FacilitiesEdit";

const router = createBrowserRouter([
  {
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/facilities_group",
        element: <FacilitiesGroup />,
      },
      {
        path: "/facilities_group/edit/:id",
        element: <FacilitiesEdit />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer position="bottom-right" theme="colored" />
    </div>
  );
};

export default App;
