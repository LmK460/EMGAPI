import Chart from "react-apexcharts";

const optionsChart = {
  options: {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
    },
  },
  series: [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ],
};

export default function Charts() {
  return (
    <div className="my-4 w-full flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex flex-col flex-1 w-full">
        <h3 className="font-semibold text-lg text-gray-700 dark:text-white">
          Gráfico 1
        </h3>
        <Chart
          options={optionsChart.options}
          series={optionsChart.series}
          type="bar"
          height={350}
        />
      </div>
      <div className="flex flex-col flex-1 w-full">
        <h3 className="font-semibold text-lg text-gray-700 dark:text-white">
          Gráfico 2
        </h3>
        <Chart
          options={optionsChart.options}
          series={optionsChart.series}
          type="bar"
          height={350}
        />
      </div>
    </div>
  );
}
