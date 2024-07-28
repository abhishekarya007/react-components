import { useNavigate } from "react-router-dom";

const Body = () => {
  const buttonCss = "w-1/2 px-6 py-2 bg-blue-500 bg-opacity-70 rounded-lg";

  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-5 text-2xl justify-center items-center h-screen">
      <div className="font-bold">React components</div>
      <div className="flex flex-col gap-5 border-2 justify-center items-center border-black h-1/2 w-1/2 p-5 rounded-lg">
        <button
          onClick={() => {
            navigate("/file-explorer");
          }}
          className={buttonCss}
        >
          File Explorer
        </button>
        <button
          onClick={() => {
            navigate("/progress-bar");
          }}
          className={buttonCss}
        >
          Progress Bar
        </button>
        <button
          onClick={() => {
            navigate("/grid-lights");
          }}
          className={buttonCss}
        >
          Grid Lights
        </button>
      </div>
    </div>
  );
};

export default Body;
