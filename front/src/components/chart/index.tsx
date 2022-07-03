import { useMemo } from "react";
import { Chart } from "react-google-charts";

// example {time: 47, emg: 0.24142557595131242}

interface ChartsProps {
  data: Array<{
    time: number;
    emg: number;
  }>;
}

const makeData = (
  data: Array<{
    time: number;
    emg: number;
  }>
) => {
  const newDataEmg: any = [["time", "emg"]];
  const newDataTime: any = [["time", "time"]];

  data.slice(1, 100).forEach((e, i) => {
    newDataEmg.push([i, e.emg]);
    newDataTime.push([i, Math.round(e.emg * 100)]);
  });

  return [newDataEmg, newDataTime];
};

export default function Charts({ data }: ChartsProps) {
  const [newDataEmg, newDataTime] = useMemo(() => makeData(data), [data]);

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
          data={newDataEmg}
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
          data={newDataTime}
          options={{
            curveType: "function",
          }}
        />
      </div>
    </div>
  );
}
