import React, { useEffect, useState } from "react";

const GridLights = () => {
  const [stack, setStack] = useState([]);

  const getStack = (key) => {
    return stack.includes(key) ? stack : stack.concat([key]);
  };

  useEffect(() => {
    console.log(stack);
    if (stack.length === 8) {
      let a = setInterval(() => {
        if (stack.length === 0) {
          clearInterval(a);
        }
        let newStack = stack.length === 0 ? [] : stack.pop();
        setStack(newStack);
      }, 300);
    }
  }, [stack]);

  return (
    <div className="flex flex-col  gap-2 p-5">
      <div className="flex justify-between">
        <div
          onClick={() => {
            setStack(getStack("first"));
          }}
          style={{
            backgroundColor: stack.includes("first") ? "green" : "white",
          }}
          className="w-56 h-56 border border-gray-400 rounded-lg"
        ></div>
        <div
          onClick={() => {
            setStack(getStack("second"));
          }}
          style={{
            backgroundColor: stack.includes("second") ? "green" : "white",
          }}
          className="w-56 h-56 border border-gray-400 rounded-lg"
        ></div>
        <div
          onClick={() => {
            setStack(getStack("third"));
          }}
          style={{
            backgroundColor: stack.includes("third") ? "green" : "white",
          }}
          className="w-56 h-56 border border-gray-400 rounded-lg"
        ></div>
      </div>
      <div className="flex justify-between">
        <div
          onClick={() => {
            setStack(getStack("fourth"));
          }}
          style={{
            backgroundColor: stack.includes("fourth") ? "green" : "white",
          }}
          className="w-56 h-56 border border-gray-400 rounded-lg"
        ></div>
        <div
          onClick={() => {
            setStack(getStack("fifth"));
          }}
          style={{
            backgroundColor: stack.includes("fifth") ? "green" : "white",
          }}
          className="w-56 h-56 border border-gray-400 rounded-lg"
        ></div>
      </div>
      <div className="flex justify-between">
        <div
          onClick={() => {
            setStack(getStack("sixth"));
          }}
          style={{
            backgroundColor: stack.includes("sixth") ? "green" : "white",
          }}
          className="w-56 h-56 border border-gray-400 rounded-lg"
        ></div>
        <div
          onClick={() => {
            setStack(getStack("seventh"));
          }}
          style={{
            backgroundColor: stack.includes("seventh") ? "green" : "white",
          }}
          className="w-56 h-56 border border-gray-400 rounded-lg"
        ></div>
        <div
          onClick={() => {
            setStack(getStack("eighth"));
          }}
          style={{
            backgroundColor: stack.includes("eighth") ? "green" : "white",
          }}
          className="w-56 h-56 border border-gray-400 rounded-lg"
        ></div>
      </div>
    </div>
  );
};

export default GridLights;
