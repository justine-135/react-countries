const Cards = ({ country, lightMode }) => {
  const mode = {
    card: `h-[336px] w-[100%] drop-shadow-md rounded-md cursor-pointer hover:translate-y-[-10px] duration-200 ${
      lightMode === "light" ? "bg-white" : "bg-veryLightGray"
    }`,
    countryName: `font-extrabold ${
      lightMode === "light" ? "text-black" : "text-white"
    }`,
    countryDetails: lightMode === "light" ? "text-black" : "text-white",
  };
  return (
    <div className={mode.card}>
      <img
        className="w-full rounded-t-md h-[160px] object-cover"
        src={country.flag}
        alt={`${country.flag} Flag`}
      />
      <div className="mt-4 px-5">
        <div className={mode.countryName}>{country.name}</div>
        <ul className="flex flex-col mt-3">
          <li className={mode.countryDetails}>
            <span className="font-semibold">Population: </span>
            <span>
              {country.population
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </span>
          </li>
          <li className={mode.countryDetails}>
            <span className="font-semibold">Region: </span>
            <span>{country.region}</span>
          </li>
          <li className={mode.countryDetails}>
            <span className="font-semibold">Capital: </span>
            <span>{country.capital}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Cards;
