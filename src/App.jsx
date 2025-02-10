import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import DashBoard from "./components/DashBoard";
import DataTable from "./components/DataTable";
import CreatePdOrder from "./components/PD-Order/CreatePdOrder";
import ApprovalLists from "./components/PD-Order/ApprovalLists";
import PdLists from "./components/PD-Order/PdLists";

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
    },
    {
      path: "/pdLists",
      element: <PdLists />
    }
  ])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
