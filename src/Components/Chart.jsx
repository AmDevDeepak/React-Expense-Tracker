import Chart from "react-apexcharts";
const options = {
  labels: ["Income", "Expense"],
  colors: ["#98c379", "#FD5E53"],
  chart: {
    width: "100px",
  },
  states: {
    hover: {
      filter: {
        type: "darken",
      },
    },
  },
  legend: {
    show: true,
  },
  dataLabels: {
    enabled: true,
  },
  hover: { mode: null },
  plotOptions: {
    donut: {
      expandOnClick: true,
      donut: {
        labels: {
          show: true,
        },
      },
    },
  },
  fill: {
    colors: ["#98c379", "#FD5E53"],
  },
  tooltip: {
    enabled: true,
    theme: "dark",
    style: {
      fontSize: "12px",
      fontFamily: "Poppins",
      fontWeight: 600,
      backgroundColor: "#000000",
    },
  },
};
const ChartComponent = ({ expense = 100, income = 100 }) => {
  return (
    <Chart
      options={options}
      series={[income, expense]}
      type="pie"
      width={"100%"}
      height={"100%"}
    />
  );
};

export default ChartComponent;
