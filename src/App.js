import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import FileExplorer from "./components/FileExplorer";
import ProgressBar from "./components/ProgressBar";
import GridLightsOp from "./components/GridLightsOp";
import EmiCalc from "./components/EmiCalc";
import PasswordGenerator from "./components/PasswordGene";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
    },
    {
      path: "/file-explorer",
      element: <FileExplorer />,
    },
    {
      path: "/progress-bar",
      element: <ProgressBar />,
    },
    {
      path: "/grid-lights",
      element: <GridLightsOp />,
    },
    {
      path: "/emi-calc",
      element: <EmiCalc />,
    },
    {
      path: "/password-generator",
      element: <PasswordGenerator />,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
