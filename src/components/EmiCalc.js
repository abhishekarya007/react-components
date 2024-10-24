import { useState } from "react";

const EmiCalc = () => {
  const [range, setRange] = useState("10");
  const [color, setColor] = useState("green");
  return (
    <div>
      <div className="flex flex-col gap-5 p-8 border border-solid-white">
        <h1>EḾ́́I Calculator</h1>
        <label>Total Cost of Asset</label>
        <input className="bg-white text-black" type="number" />

        <label>Interest Rate (in %)</label>
        <input className="bg-white text-black" type="number" />

        <label>Processing Fee (int %)</label>
        <input className="bg-white text-black" type="number" />

        <label>Down Payment</label>
        <input className="bg-white text-black" type="range" />

        <label>Loan Per Month</label>
        <input className="bg-white text-black" type="range" />
      </div>
    </div>
  );
};

export default EmiCalc;
