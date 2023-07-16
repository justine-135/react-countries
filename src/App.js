import NavBar from "./partials/navbar";
import Countries from "./components/countries";
import CardDetail from "./components/CardDetail";
import NoMatch from "./partials/nomatch";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

function App() {
  // const [data, setData] = useState(dataJson);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [input, setInput] = useState("");
  const [url, setUrl] = useState(`https://restcountries.com/v3.1/all`);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const request = await axios.request(url);
        if (request.status === 200) {
          setData(request.data);
          setLoading(false);
          setError(false);
        }

        return request;
      } catch (error) {
        setError(true);
        return;
      }
    };
    fetchData();
  }, [url]);

  const [lightMode, setLightMode] = useState("light");

  const mode = {
    app: `App font-default duration-200 `,
  };
  return (
    <div className={mode.app}>
      <NavBar lightMode={lightMode} setLightMode={setLightMode} />
      <Router>
        <Routes>
          <Route
            path="/react-countries/"
            element={
              <Countries
                lightMode={lightMode}
                data={data}
                loading={loading}
                input={input}
                setInput={setInput}
                setUrl={setUrl}
                error={error}
              />
            }
          />
          <Route
            exact
            path="/react-countries/countries/:cca3"
            element={<CardDetail lightMode={lightMode} />}
          />
          <Route path="*" element={<NoMatch lightMode={lightMode} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
