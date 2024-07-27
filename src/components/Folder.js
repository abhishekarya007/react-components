import React, { useState } from "react";

const Folder = ({ folder }) => {
  const { name, items, isFolder } = folder;
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState("");

  const handleKeyUp = (ev) => {
    if (ev.key === "Enter" && ev.target.value) {
      setShowInput("");
    }
  };

  return (
    <div className="ml-4 m-2">
      <div>
        <span className="mr-2">{isFolder ? "🗂️" : "🗄️"}</span>
        <span
          className="cursor-pointer items-center"
          onClick={() => {
            setExpand(!expand);
            setShowInput("");
          }}
        >
          {name}
        </span>
        <button
          onClick={() => {
            setExpand(true);
            setShowInput("folder");
          }}
          className="ml-10 mr-5 bg-blue-300 py-1 px-2 rounded-md"
        >
          Folder +
        </button>
        <button
          onClick={() => {
            setExpand(true);
            setShowInput("file");
          }}
          className="bg-green-200 py-1 px-2 rounded-md"
        >
          File +
        </button>
      </div>
      {showInput !== "" && (
        <div className="ml-4 mt-2">
          <span>{showInput === "folder" ? "🗂️" : "🗄️"}</span>
          <input
            onKeyUp={handleKeyUp}
            onBlur={() => setShowInput(false)}
            className="pl-2 border border-black ml-2"
            type="text"
            autoFocus
          />
        </div>
      )}
      {expand &&
        items.map((item) => {
          return <Folder key={item.id} folder={item} />;
        })}
    </div>
  );
};

export default Folder;
