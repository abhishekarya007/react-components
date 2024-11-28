import { useState } from "react";

const PasswordGenerator = () => {
  const [length, setlength] = useState(0);
  const [isUpperCase, setIsUpperCase] = useState(false);

  return (
    <div className="flex flex-col w-[400px] p-5 gap-3">
      <div className="flex justify-between">
        <span>Generared Password</span>
        <button className="bg-blue-500 p-2 rounded-md">Copy</button>
      </div>
      <div className="flex justify-between">
        <span>Character Length</span>
        {length}
      </div>
      <div>
        <input
          className="w-full"
          type="range"
          min={0}
          max={50}
          value={length}
          onChange={(ev) => setlength(ev.target.value)}
        />
      </div>
      <div className="flex flex-wrap w-full justify-between">
        <div>
          <div className="flex gap-2">
            <input
              type="checkbox"
              checked={isUpperCase}
              onChange={() => {
                console.log(isUpperCase);
                setIsUpperCase(!isUpperCase);
              }}
            />
            <span>Include Uppercase</span>
          </div>
          <div className="flex gap-2">
            <input type="checkbox" />
            <span>Include Lowercase</span>
          </div>
        </div>
        <div>
          <div className="flex gap-2">
            <input type="checkbox" />
            <span>Include Number</span>
          </div>
          <div className="flex gap-2">
            <input type="checkbox" />
            <span>Include Symbol</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
