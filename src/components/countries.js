import { useState } from "react";
import Cards from "./cards";

const Countries = ({
  lightMode,
  data,
  loading,
  input,
  setInput,
  setUrl,
  error,
}) => {
  const [regionDropDown, setRegionDropDown] = useState(false);

  const handleRegionDropDown = () => {
    !regionDropDown ? setRegionDropDown(true) : setRegionDropDown(false);
  };

  const handleCountryInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.length === 0) {
      setUrl(`https://restcountries.com/v3.1/all`);
    } else {
      setUrl(`https://restcountries.com/v3.1/name/${input}`);
    }
  };

  const handleRegionButton = (e) => {
    setUrl(`https://restcountries.com/v3.1/region/${e.target.value}`);
  };

  const mode = {
    main: `flex justify-center tabletNav:pt-[120px] pt-[100px] ${
      lightMode === "light" ? "bg-darkWhite" : "bg-veryDarkBlueDark"
    }`,
    searchInputContainer: `shadow rounded-md py-3 tabletNav:w-[40%] w-full min-w-[287px]  ${
      lightMode === "light" ? "bg-white" : "bg-veryLightGray"
    }`,
    filterContainer: `relative rounded-md ${
      lightMode === "light" ? "text-black" : "text-white"
    }`,
    filterButton: `flex items-center cursor-pointer rounded-md tabletNav:mt-0 mt-12 py-3 px-6 tabletNavpx-5 shadow ${
      lightMode === "light" ? "bg-white " : "bg-veryLightGray "
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
    card: `h-[336px] w-[100%] drop-shadow-md rounded-md cursor-pointer hover:translate-y-[-10px] duration-200 ${
      lightMode === "light" ? "bg-white" : "bg-veryLightGray"
    }`,
    countryName: `font-extrabold ${
      lightMode === "light"
        ? "bg-[#f1f5f9] text-[#f1f5f9] rounded-sm"
        : "text-white"
    }`,
    countryDetails: `rounded-sm ${
      lightMode === "light" ? "bg-[#f1f5f9] text-[#f1f5f9]" : "text-white"
    }`,
  };

  let dummyCards = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <main className={mode.main}>
      <div className="tablet2:w-[80%] w-[90%] max-w-[1128px]">
        <section className="relative flex tabletNav:flex-row flex-col justify-between align-middle">
          <form
            className={mode.searchInputContainer}
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <button className="px-8 ">
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
              onChange={(e) => {
                handleCountryInput(e);
              }}
              value={input}
            />
          </form>
          {error ? (
            <div className="absolute mt-14 text-[red]">Country not found.</div>
          ) : (
            ""
          )}
          <div className={mode.filterContainer}>
            <button
              className={mode.filterButton}
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
              <button
                type="input"
                value="Africa"
                className={mode.regionOption}
                onClick={(e) => {
                  handleRegionButton(e);
                }}
              >
                Africa
              </button>
              <button
                type="input"
                value="America"
                className={mode.regionOption}
                onClick={(e) => {
                  handleRegionButton(e);
                }}
              >
                America
              </button>
              <button
                type="input"
                value="Asia"
                className={mode.regionOption}
                onClick={(e) => {
                  handleRegionButton(e);
                }}
              >
                Asia
              </button>
              <button
                type="input"
                value="Europe"
                className={mode.regionOption}
                onClick={(e) => {
                  handleRegionButton(e);
                }}
              >
                Europe
              </button>
              <button
                type="input"
                value="Oceania"
                className={mode.regionOption}
                onClick={(e) => {
                  handleRegionButton(e);
                }}
              >
                Oceania
              </button>
            </div>
          </div>
        </section>

        <section className="grid auto-rows-auto grid-cols-1 tablet:grid-cols-3 tablet2:grid-cols-2 pc:grid-cols-4 gap-12 place-content-between my-12 w-full">
          {!loading
            ? data.map((country, index) => {
                return (
                  <Cards
                    key={country.cca3}
                    country={country}
                    lightMode={lightMode}
                  />
                );
              })
            : dummyCards.map((cards, index) => {
                return (
                  <div key={index}>
                    <div className={mode.card}>
                      <div className="w-full rounded-t-md bg-[#f1f5f9] h-[160px] "></div>
                      <div className="mt-4 px-5">
                        <div className={mode.countryName}>Loading</div>
                        <ul className="flex flex-col mt-3">
                          <li className={mode.countryDetails}>
                            <span className="font-semibold">Loading</span>
                            <span></span>
                          </li>
                          <li className={mode.countryDetails}>
                            <span className="font-semibold">Loading</span>
                            <span></span>
                          </li>
                          <li className={mode.countryDetails}>
                            <span className="font-semibold">Loading</span>
                            <span></span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
        </section>
      </div>
    </main>
  );
};

export default Countries;
