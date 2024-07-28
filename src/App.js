import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import FileExplorer from "./components/FileExplorer";
import ProgressBar from "./components/ProgressBar";

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
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
