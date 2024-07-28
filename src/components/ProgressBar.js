import React, { useEffect, useState } from "react";

const ProgressBar = () => {
  console.log("first");
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setPercentage((prev) => Math.min(100, prev + 1));
    }, 100);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="absolute w-96 text-center border border-black rounded-xl overflow-hidden">
        <div
          style={{
            width: `${percentage}%`,
            height: "20px",
            backgroundColor: "green",
            borderRadius: "12px",
          }}
        ></div>
        <div
          style={{ color: percentage > 49 ? "white" : "black" }}
          className="absolute text-center left-1/2 bottom-[-2px] font-bold"
        >
          {percentage}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
