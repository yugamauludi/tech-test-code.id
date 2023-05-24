import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import Dashboard from "../pages/Dashobard";
import EditContact from "../pages/EditContact";
import AddContact from "../pages/AddContact"

const router = createBrowserRouter([
  {
    element: <Layout />,

    children: [
      {
        path: "/",
        element: <Dashboard />
      },
      {
        path: "/:id",
        element: <EditContact />,
      },
      {
        path: "/add-contact",
        element: <AddContact />,
      }
    ],
  },
]);

// rhf form react

export default router;
