import { useContext, useEffect, useState } from "react";

import { Theme } from "./context/themeProvider";
import Charts from "./components/chart";
import Switch from "./components/switch";
import Table from "./components/table";
import Api from "./services/api";

import logo_light from "./assets/logo-light.svg";
import logo_dark from "./assets/logo-dark.svg";

function App() {
  const { theme } = useContext(Theme);
  const [normal, setNormal] = useState([]);
  const [fourier, setFourier] = useState([]);
  const [wavelet, setWavelet] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(50);

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

  if (loading) return <h1>Loading...</h1>;

  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = normal.slice(indexOfFirstData, indexOfLastData - 1);

  const paginate = (page: number) => setCurrentPage(page);

  return (
    <div className="bg-background dark:bg-gray-900 h-screen w-full p-4 overflow-y-scroll">
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
        <Charts
          normalData={normal}
          fourierData={fourier}
          waveletData={wavelet}
        />

        {/* Table*/}
        <Table
          data={currentData}
          dataPerPage={dataPerPage}
          currentPage={currentPage}
          totalData={normal.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

export default App;
