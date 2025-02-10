import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import DashBoard from "./components/DashBoard";
import DataTable from "./components/DataTable";
import CreatePdOrder from "./components/PD-Order/CreatePdOrder";
import ApprovalLists from "./components/PD-Order/ApprovalLists";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <DashBoard />
    },
    {
      path: "/dataTable",
      element: <DataTable /> 
    },
    {
      path: "/createOrder",
      element: <CreatePdOrder />
    },
    {
      path: "/approvalLists",
      element: <ApprovalLists />
    }
  ])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
