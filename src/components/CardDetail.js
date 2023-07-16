import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CardDetail = ({ lightMode }) => {
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const { cca3 } = useParams();
  const [borders, setBorders] = useState(false);
  const url = `https://restcountries.com/v3.1/alpha/${cca3}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.request(url);
        setData(request.data);
        setError(false);
        return request;
      } catch (error) {
        setError(true);
      }
    };

    fetchData();
  }, [url]);

  const mode = {
    main: `flex justify-center h-screen pt-[120px] ${
      lightMode === "light" ? "bg-white" : "bg-veryDarkBlueDark text-white"
    }`,
    backButton: `flex items-center justify-center py-3 w-[10%] min-w-[110px] rounded-md font-semibold duration-100 ${
      lightMode === "light"
        ? "bg-white shadow-backBtnLight hover:bg-[#f1f5f9]"
        : "bg-veryLightGray shadow-backBtnDark text-white hover:bg-[#374151]"
    }`,
    codeLinks: `shadow py-1 px-3 rounded-md duration-100 ${
      lightMode === "light"
        ? "bg-white hover:bg-[#f1f5f9]"
        : "bg-veryLightGray text-white hover:bg-[#374151]"
    }`,
  };

  let languages = "";
  let tlds = "";
  let i = 0;
  let j = 0;

  return (
    <main className={mode.main}>
      <div className="tablet:w-[80%] w-[90%] max-w-[1128px]">
        <Link to="/" className={mode.backButton}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-left mr-2"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>
          <div>Back</div>
        </Link>

        {error ? (
          <div className="text-center">
            <div className="flex justify-center items-center mt-16">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="mr-2 bi bi-flag"
                viewBox="0 0 16 16"
              >
                <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001M14 1.221c-.22.078-.48.167-.766.255-.81.252-1.872.523-2.734.523-.886 0-1.592-.286-2.203-.534l-.008-.003C7.662 1.21 7.139 1 6.5 1c-.669 0-1.606.229-2.415.478A21.294 21.294 0 0 0 3 1.845v6.433c.22-.078.48-.167.766-.255C4.576 7.77 5.638 7.5 6.5 7.5c.847 0 1.548.28 2.158.525l.028.01C9.32 8.29 9.86 8.5 10.5 8.5c.668 0 1.606-.229 2.415-.478A21.317 21.317 0 0 0 14 7.655V1.222z" />
              </svg>
              Country code Not found.
            </div>
          </div>
        ) : (
          data.map((country) => {
            Object.values(country.languages).map((language) => {
              i++;
              if (i === Object.values(country.languages).length) {
                languages += language;
              } else {
                languages += language + " ";
              }
            });
            Object.values(country.tld).map((tld) => {
              j++;
              if (j === Object.values(country.tld).length) {
                tlds += tld;
              } else {
                tlds += tld + " ";
              }
            });

            return (
              <section
                className="flex flex-col tablet:flex-row justify-between items-center mt-12 mb-120 font-default"
                key={country.cca3}
              >
                <img
                  src={country.flags.png}
                  className="shadow-md tablet:shadow-lg w-full tablet:w-[40%]"
                  alt=""
                />
                <div className="text-left w-full mt-8 tablet:w-[50%]">
                  <div className="font-extrabold text-18">
                    {country.name.common}
                  </div>
                  <div className="flex flex-col tablet:flex-row justify-between mt-6">
                    <ul className="mr-3">
                      <li className="mb-2">
                        <span className="font-semibold">Native Name: </span>
                        <span className="font-light">
                          {Object.values(country.name.nativeName)[0].common}
                        </span>
                      </li>
                      <li className="mb-2">
                        <span className="font-semibold">Population: </span>
                        <span>
                          {country.population
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </span>
                      </li>
                      <li className="mb-2">
                        <span className="font-semibold">Region: </span>
                        <span className="font-normal">{country.region}</span>
                      </li>
                      <li className="mb-2">
                        <span className="font-semibold">Sub Region: </span>
                        <span>{country.subregion}</span>
                      </li>
                      <li className="mb-2">
                        <span className="font-semibold">Capital: </span>
                        <span>{country.capital}</span>
                      </li>
                    </ul>
                    <ul>
                      <li className="mb-2 mt-8 tablet:mt-0">
                        <span className="font-semibold">
                          Top Level Domain:{" "}
                        </span>
                        <span>{tlds.split(" ").join(", ")}</span>
                      </li>
                      <li className="mb-2">
                        <span className="font-semibold">Currencies: </span>
                        {Object.values(country.currencies)[0].name}
                      </li>
                      <li className="mb-2">
                        <span className="font-semibold">Languages: </span>
                        <span>{languages.split(" ").join(", ")}</span>
                      </li>
                    </ul>
                  </div>

                  {country.hasOwnProperty("borders") ? (
                    <div className="flex flex-col tablet:flex-row items-start mt-12">
                      <span className="block font-semibold break-keep mr-5 mt-1">
                        Borders Countries:
                      </span>
                      <div className="flex max-w-[350px] mt-4 tablet:mt-0 flex-wrap gap-2">
                        {country.borders.map((border) => {
                          return (
                            <Link
                              to={`../countries/${border}`}
                              className={mode.codeLinks}
                              key={border}
                            >
                              {border}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
              </section>
            );
          })
        )}
      </div>
    </main>
  );
};

export default CardDetail;
