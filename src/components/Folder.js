import React, { useState } from "react";

const Folder = ({ folder }) => {
  const { name, items, isFolder } = folder;
  const [expand, setExpand] = useState(false);
  return (
    <div className="ml-4">
      <div>
        <span className="mr-2">{isFolder ? "🗂️" : "🗄️"}</span>
        <span
          className="cursor-pointer items-center"
          onClick={() => setExpand(!expand)}
        >
          {name}
        </span>
      </div>
      {expand &&
        items.map((item) => {
          return <Folder folder={item} />;
        })}
    </div>
  );
};

export default Folder;
