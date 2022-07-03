import { useContext } from "react";
import logo_light from "./assets/logo-light.svg";
import logo_dark from "./assets/logo-dark.svg";

import Charts from "./components/chart";
import Switch from "./components/switch";
import Table from "./components/table";
import { Theme } from "./context/themeProvider";

function App() {
  const { theme } = useContext(Theme);

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
        <Charts />

        {/* Tables */}
        <Table />
      </div>
    </div>
  );
}

export default App;
