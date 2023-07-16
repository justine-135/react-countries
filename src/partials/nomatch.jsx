import { Link } from "react-router-dom";

const NoMatch = ({ lightMode }) => {
  const mode = {
    container: `h-screen text-center py-[120px] ${
      lightMode === "light" ? "bg-white" : "bg-veryDarkBlueDark text-white"
    }`,
  };
  return (
    <div className={mode.container}>
      <div className="flex flex-col pt-16 items-center">
        <div className="flex justify-center items-center mb-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-file-earmark mr-2"
            viewBox="0 0 16 16"
          >
            <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" />
          </svg>
          Page not found.
        </div>
        <div>
          Click{" "}
          <Link
            className="underline decoration-solid underline-offset-2 text-[blue]"
            to="/react-countries"
          >
            here
          </Link>{" "}
          to go back.
        </div>
      </div>
    </div>
  );
};

export default NoMatch;
