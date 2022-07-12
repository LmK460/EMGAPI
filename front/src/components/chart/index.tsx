import { useMemo } from "react";
import { Chart } from "react-google-charts";

// example {time: 47, emg: 0.24142557595131242}

export type DataChart = {
  x: number[];
  y: number[];
};

interface ChartsProps {
  normalData: DataChart[];
  fourierData: DataChart[];
  waveletData: DataChart[];
}

const makeData = (data: DataChart[]) => {
  const newData: any = [["time(ms)", "amplitude(mv)"]];
  data.forEach((e) => {
    newData.push([e.x, e.y]);
  });
  return newData;
};

export default function Charts({
  normalData,
  fourierData,
  waveletData,
}: ChartsProps) {
  if (!normalData || !fourierData || !waveletData) return <></>;

  const makeNormalData = makeData(normalData);

  return (
    <div className="my-4 w-full flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex flex-col flex-1 w-full">
        <h3 className="font-semibold text-lg text-gray-700 dark:text-white">
          Gráfico 1
        </h3>
        <Chart
          chartType="LineChart"
          width="100%"
          height="400px"
          data={makeNormalData}
          options={{
            curveType: "function",
          }}
        />
      </div>
      <div className="flex flex-col flex-1 w-full">
        <h3 className="font-semibold text-lg text-gray-700 dark:text-white">
          Gráfico 2
        </h3>
        <Chart
          chartType="LineChart"
          width="100%"
          height="400px"
          data={makeNormalData}
          options={{
            curveType: "function",
          }}
        />
      </div>
    </div>
  );
}
