import { Link } from "react-router-dom";

const Cards = ({ loading, country, lightMode }) => {
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
    <Link to={`/countries/${country.cca3}`}>
      <div className={mode.card}>
        <img
          className="w-full rounded-t-md h-[160px] object-cover"
          src={country.flags.png}
          alt={country.flag}
        />
        <div className="mt-4 px-5">
          <div className={mode.countryName}>{country.name.common}</div>
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
    </Link>
  );
};

export default Cards;
