import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { fetchData } from "../redux/actions";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const [data, setData] = useState({ labels: [], datasets: [] }); // State to store formatted data

  useEffect(() => {
    let isMounted = true; // Track if component is mounted

    const asyncFn = async () => {
      try {
        const resData = await fetchData("customer-type"); // Call your fetchData function
        console.log("Fetched data:", resData); // Log fetched data for verification
        if (isMounted) {
          const formattedData = formatChartData(resData); // Format data for chart
          console.log("Formatted data:", formattedData); // Log formatted data for verification
          setData(formattedData); // Update state only if component is still mounted
        }
      } catch (error) {
        console.error("Error fetching data:", error); // Log any errors during fetch
        // Handle error by displaying a message or setting an error state
      }
    };
    asyncFn();

    return () => {
      isMounted = false; // Cleanup function to set isMounted to false
    };
  }, []);

  const formatChartData = (rawData) => {
    if (!rawData || rawData.length === 0) {
      console.log("Empty data received, returning empty chart configuration");
      return { labels: [], datasets: [] }; // Empty chart configuration for empty data
    }

    const chartData = {};
    rawData.forEach((item) => {
      console.log("Current item:", item);
      const quarter = item.closed_fiscal_quarter;
      if (!chartData[quarter]) {
        chartData[quarter] = { existing: { acv: 0 }, new: { acv: 0 } }; // Initialize for new quarter
      }
      console.log("Current quarter data:", chartData[quarter]);
      const customerTypeObj =
        item.Cust_Type === "Existing Customer"
          ? chartData[quarter].existing
          : chartData[quarter].new;
      customerTypeObj.acv += item.acv; // Accumulate ACV by quarter and customer type
    });

    const labels = Object.keys(chartData);
    const existingACV = labels.map(
      (quarter) => chartData[quarter].existing.acv
    );
    const newACV = labels.map((quarter) => chartData[quarter].new.acv);

    return {
      labels,
      datasets: [
        {
          label: "Existing Customer ACV",
          data: existingACV,
          backgroundColor: "rgba(255, 99, 132, 0.5)", // Example color
        },
        {
          label: "New Customer ACV",
          data: newACV,
          backgroundColor: "rgba(53, 162, 235, 0.5)", // Example color
        },
      ],
    };
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top", // Legend at the top
      },
      title: {
        display: true,
        text: "Industry-wise ACV", // Chart title (update if needed)
      },
    },
    scales: {
      xAxes: [
        {
          stacked: false, // Disable stacking for separate bars (optional for stacked bars)
        },
      ],
    },
  };

  return (
    <div>
      {console.log("Data in component:", data)}
      {data.labels.length > 0 ? (
        <Bar options={options} data={data} />
      ) : (
        <div>
          <p>Loading data...</p>
          {console.log(data)}
        </div>
      )}
    </div>
  );
};

export default BarChart;
