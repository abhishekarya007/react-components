import React from "react";
import explorer from "../data";
import Folder from "./Folder";

const FileExplorer = () => {
  const data = explorer;
  return (
    <div>
      <Folder folder={data} />
    </div>
  );
};

export default FileExplorer;
