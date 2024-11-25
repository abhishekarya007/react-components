import { useEffect, useRef, useState } from "react";

const OtpLogin = ({ length = 4 }) => {
  const [otpInput, setOtpInput] = useState(new Array(length).fill(""));
  const inputRef = useRef([]);

  useEffect(() => {
    if (inputRef.current[0]) {
      inputRef.current[0].focus();
    }
  }, []);

  const handleOnchange = (e, index) => {
    const value = e.target.value.trim();
    const newOtp = [...otpInput];
    newOtp[index] = value.substring(value.length - 1);
    setOtpInput(newOtp);

    if (value && index < length - 1) {
      inputRef.current[index + 1].focus();
    }
  };

  const handleOnKeyUp = (e, index) => {
    const value = e.target.value;
    if (e.key == "Backspace" && index > 0 && !value) {
      inputRef.current[index - 1].focus();
    }
  };

  return (
    <div>
      <form>
        {otpInput.map((val, index) => {
          return (
            <input
              key={index}
              ref={(input) => (inputRef.current[index] = input)}
              type="text"
              value={val}
              onChange={(e) => handleOnchange(e, index)}
              onKeyUp={(e) => handleOnKeyUp(e, index)}
              onkey
            />
          );
        })}
      </form>
    </div>
  );
};

export default OtpLogin;
