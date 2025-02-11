import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import DashBoard from "./components/DashBoard";
import DataTable from "./components/DataTable";
import CreatePdOrder from "./components/PD-Order/CreatePdOrder";
import ApprovalLists from "./components/PD-Order/ApprovalLists";
import SketchApproval from "./components/Sketches/ApprovalLists";
import PdLists from "./components/PD-Order/PdLists";
import SketchList from "./components/Sketches/SketchList";
import SketchGridView from "./components/Sketches/SketchGridView";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DashBoard />,
    },
    {
      path: "/dataTable",
      element: <DataTable />,
    },
    {
      path: "/createOrder",
      element: <CreatePdOrder />,
    },
    {
      path: "/approvalLists",
      element: <ApprovalLists />,
    },
    {
      path: "/pdLists",
      element: <PdLists />,
    },
    {
      path: "/sketchList",
      element: <SketchList />,
    },
    {
      path: "/sketchApproval",
      element: <SketchApproval />,
    },
    {
      path: "/sketchGridView",
      element: <SketchGridView />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
