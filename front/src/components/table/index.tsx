interface Props {
  data: Array<{
    x: number;
    y: number;
  }>;
  dataPerPage: number;
  totalData: number;
  currentPage: number;
  paginate: (page: number) => void;
}

export default function Table({
  data,
  dataPerPage,
  totalData,
  currentPage,
  paginate,
}: Props) {
  const pageNumbers = [];
  for (let i = 0; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumbers.push(i + 1);
  }

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-3 lg:-mx-3">
        <div className="py-2 inline-block min-w-full sm:px-2 lg:px-2">
          <div className=" overflow-y-scroll h-[500px]">
            <table className="min-w-full">
              <thead className="bg-white border-b">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Frequência
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Voltagem
                  </th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.map((d: any, i: number) => {
                    return (
                      <tr
                        key={i}
                        className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {i}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {d.x}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {d.y}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <ul className="flex items-center gap-2">
        {pageNumbers.map((e, i) => {
          return (
            <li key={i}>
              <button
                onClick={() => paginate(e)}
                disabled={currentPage === e}
                className={`
                  px-[6px] py-[2px]
                bg-slate-600 dark:bg-white 
                  rounded-sm hover:text-sky-600 dark:hover:text-sky-600 
                  text-white dark:text-slate-500 
                  text-sm
                  dark:disabled:bg-red-500 dark:disabled:text-white
                  disabled:bg-red-500 disabled:text-white
                `}
              >
                {e}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
