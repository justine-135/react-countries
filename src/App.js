import NavBar from "./partials/navbar";
import Cards from "./components/cards";
import dataJson from "./data.json";
import { useState } from "react";
function App() {
  const [data] = useState(dataJson);
  const [lightMode, setLightMode] = useState("light");
  const [regionDropDown, setRegionDropDown] = useState(false);

  const handleRegionDropDown = () => {
    !regionDropDown ? setRegionDropDown(true) : setRegionDropDown(false);
    console.log(data[0]);
  };

  const mode = {
    app: `App font-default duration-200 ${
      lightMode === "light" ? "bg-darkWhite" : "bg-veryDarkBlueDark"
    }`,
    searchInputContainer: `shadow rounded-md py-3 w-[40%] min-w-[275px]  ${
      lightMode === "light" ? "bg-white" : "bg-veryLightGray"
    }`,
    filterContainer: `relative rounded-md ${
      lightMode === "light"
        ? "bg-white text-black"
        : "bg-veryLightGray text-white"
    }`,
    regionDropDown: `${
      regionDropDown ? "flex" : "hidden"
    }  flex-col absolute w-full rounded-md mt-2 shadow p-4 z-50 ${
      lightMode === "light" ? "bg-white" : "bg-veryLightGray"
    }`,
    regionOption: `text-left py-1  ${
      lightMode === "light"
        ? "text-slate-800 hover:text-slate-400"
        : "text-slate-100 hover:text-slate-500"
    }`,
  };
  return (
    <div className={mode.app}>
      <NavBar lightMode={lightMode} setLightMode={setLightMode} />
      <main className="flex justify-center mt-12">
        <div className="w-[80%]">
          <section className="flex justify-between align-middle">
            <div className={mode.searchInputContainer}>
              <button className="px-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="grey"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </button>
              <input
                className="focus: outline-none bg-transparent"
                type="text"
                name=""
                id=""
                placeholder="Search for a country.."
              />
            </div>
            <div className={mode.filterContainer}>
              <button
                className="flex items-center cursor-pointer py-3 px-5 shadow bg-transparent"
                onClick={handleRegionDropDown}
              >
                <div className="mr-5 font-semibold"> Filter by Region</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </button>
              <div className={mode.regionDropDown}>
                <button className={mode.regionOption}>Africa</button>
                <button className={mode.regionOption}>Africa</button>
                <button className={mode.regionOption}>Africa</button>
                <button className={mode.regionOption}>Africa</button>
              </div>
            </div>
          </section>
          <section className="grid auto-rows-auto grid-cols-4 gap-12 place-content-between my-12 w-full">
            {data.map((country, index) => {
              return (
                <Cards
                  key={country.alpha2Code}
                  country={country}
                  lightMode={lightMode}
                />
              );
            })}
            {/* {data.slice(0, 20).map((country, index) => {
              return (
                <Cards
                  key={country.alpha2Code}
                  country={country}
                  lightMode={lightMode}
                />
              );
            })} */}
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
