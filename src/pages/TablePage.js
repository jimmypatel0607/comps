import SortableTable from "../components/SortableTable";
function TablePage() {
  const config = [
    {
      label: "name",
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name,
    },
    {
      label: "color",
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color} `}></div>,
    },
    {
      label: "score",
      render: (fruit) => fruit.score,
      header: () => <th className="bg-red-500">Score</th>,
      sortValue: (fruit) => fruit.score,
    },
  ];
  const data = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Apple", color: "bg-red-500", score: 3 },
    { name: "Banana", color: "bg-yellow-500", score: 1 },
    { name: "Lime", color: "bg-green-500", score: 2 },
  ];
  const keyFn = (fruit) => {
    return fruit.name;
  };
  return (
    <div>
      <SortableTable data={data} config={config} keyFn={keyFn} />
    </div>
  );
}

export default TablePage;
