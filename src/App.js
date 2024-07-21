import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
    },
    {
      path: "/file-explorer",
      element: <div>File Explorer</div>,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
