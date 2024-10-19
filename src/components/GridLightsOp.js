import React, { useState } from "react";

const GridCell = ({ isActive, activateCell }) => {
  return (
    <div
      onClick={activateCell}
      style={{ backgroundColor: isActive ? "green" : "white" }}
      className="w-56 h-56 border rounded-lg border-gray-400"
    ></div>
  );
};

const GridLightsOp = () => {
  const grid = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];
  const [stack, setStack] = useState([]);

  const activateCell = (index) => {
    let newStack = stack.includes(index) ? stack : stack.concat([index]);
    setStack(newStack);
    let trueVal = grid.flat().filter((val) => val === 1);
    if (trueVal.length === newStack.length) {
      let timmeout = setInterval(() => {
        // console.log(stack);
        // stack.pop();
        // setStack(stack);
        setStack((prev) => {
          const temp = prev.slice();
          console.log(temp);
          //   temp.pop();
          console.log(temp);
          if (temp.length === 1) {
            clearInterval(timmeout);
          }
        });
      }, 1000);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div
        style={{ gridTemplateColumns: `repeat(${grid[0].length},1fr)` }}
        className="grid gap-5 p-5"
      >
        {grid.flat().map((val, index) => {
          return val ? (
            <GridCell
              key={index}
              isActive={stack.includes(index)}
              stack={stack}
              activateCell={() => activateCell(index)}
            />
          ) : (
            <span key={index} />
          );
        })}
      </div>
    </div>
  );
};

export default GridLightsOp;
