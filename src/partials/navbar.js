const NavBar = ({ lightMode, setLightMode }) => {
  const handleMode = () => {
    lightMode === "light" ? setLightMode("dark") : setLightMode("light");
  };

  const modes = {
    nav: `fixed flex justify-center h-20 font-default w-full shadow z-50 duration-100 ease-in ${
      lightMode === "light" ? "bg-white " : "bg-veryLightGray"
    }`,
    h1: `text-sm tablet:text-18 font-extrabold ${
      lightMode === "light" ? "text-[black]" : "text-[white]"
    }`,
    button: `flex items-center font-semibold ${
      lightMode === "light" ? "text-[black]" : "text-[white]"
    }`,
    svg: lightMode === "light" ? "black" : "white",
  };

  return (
    <nav className={modes.nav}>
      <section className="flex justify-between items-center w-[90%] tablet:w-[80%] max-w-[1128px]">
        <header className={modes.h1}>Where in the world?</header>
        <button
          className={modes.button}
          onClick={() => {
            handleMode();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="white"
            stroke={modes.svg}
            className="bi bi-moon mr-2"
            viewBox="0 0 16 16"
          >
            <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
          </svg>
          Dark mode
        </button>
      </section>
    </nav>
  );
};

export default NavBar;
