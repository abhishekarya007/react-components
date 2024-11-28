import { useEffect, useState } from "react";

const SelectableGrid = ({ row, column }) => {
  const [grid, setGrid] = useState([]);
  const [startPoint, setStartPoint] = useState();
  const [endPoint, setEndPoint] = useState();
  const [selectedBox, setSelectedBox] = useState([]);
  const [isMouseDown, setIsMouseDown] = useState(false);

  useEffect(() => {
    if (isMouseDown) {
      const startRow = parseInt(startPoint / column);
      const startCol = parseInt(startPoint % row) - 1;
      const endRow = parseInt(endPoint / column);
      const endCol = parseInt(endPoint % row) - 1;

      const minRow = Math.min(startRow, endRow);
      const maxRow = Math.max(startRow, endRow);
      const minCol = Math.min(startCol, endCol);
      const maxCol = Math.max(startCol, endCol);

      let temp = [];
      for (let i = minRow; i <= maxRow; i++) {
        for (let j = minCol; j <= maxCol; j++) {
          temp.push(i * row + j + 1);
        }
      }
      console.log(temp);
      setSelectedBox(temp);
    }
  }, [endPoint]);

  useEffect(() => {
    let arr = [];
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < column; j++) {
        arr.push(
          <div
            key={i * row + j + 1}
            id={i * row + j + 1}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "50px",
              height: "50px",
              border: "1px solid",
              backgroundColor: `${
                selectedBox.includes(i * row + j + 1) ? "blue" : ""
              }`,
            }}
            onMouseDown={(e) => {
              setIsMouseDown(true);
              setStartPoint(e.target.id);
            }}
            onMouseEnter={(e) => {
              setEndPoint(e.target.id);
            }}
            onMouseUp={() => setIsMouseDown(false)}
          >
            {i * row + j + 1}
          </div>
        );
      }
    }
    setGrid(arr);
  }, [selectedBox]);

  return (
    <div
      style={{
        display: "flex",
        width: `${50 * (column + 1)}px`,
        flexWrap: "wrap",
        userSelect: "none",
      }}
    >
      {grid.map((ele) => {
        return ele;
      })}
    </div>
  );
};

export default SelectableGrid;
