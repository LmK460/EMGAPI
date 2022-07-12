import { useContext, useEffect, useState } from "react";

import Charts from "./components/chart";
import Switch from "./components/switch";
import Table from "./components/table";
import { Theme } from "./context/themeProvider";

import logo_light from "./assets/logo-light.svg";
import logo_dark from "./assets/logo-dark.svg";
import Api from "./services/api";

function App() {
  const { theme } = useContext(Theme);
  const [normal, setNormal] = useState([]);
  const [fourier, setFourier] = useState([]);
  const [wavelet, setWavelet] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      setLoading(true);
      try {
        const [normalData, fourierData, waveletData] = await Api.getAllData();
        setNormal(normalData);
        setFourier(fourierData);
        setWavelet(waveletData);
        
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className="bg-background dark:bg-gray-900 w-full p-4">
      <div className="max-w-6xl mx-auto ">
        <header className="py-4 flex items-center justify-between">
          {theme === "dark" ? (
            <img src={logo_dark} alt="smart_socket_dark" />
          ) : (
            <img src={logo_light} alt="smart_socket_light" />
          )}
          <Switch />
        </header>

        {/* Gráficos */}
        <Charts normalData={normal}
          fourierData={fourier}
          waveletData={wavelet}
          />

        {/* Tables */}
        <Table />
      </div>
    </div>
  );
}

export default App;
