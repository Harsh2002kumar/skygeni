import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { fetchData } from '../redux/actions';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const [data, setData] = useState([]); // State to store fetched data

  useEffect(() => {
    let isMounted = true; // Track if component is mounted

    const asyncFn = async () => {
      const resData = await fetchData("account-industry"); // Call your fetchData function
      if (isMounted) {
        setData(resData); // Update state only if component is still mounted
      }
    };
    asyncFn();

    return () => {
      isMounted = false; // Cleanup function to set isMounted to false
    };
  }, []); // Empty dependency array: fetch data only once on component mount

  const chartData = {
    labels: data.map((item) => item.Acct_Industry), // Extract industry names
    datasets: [
      {
        label: 'ACV',
        data: data.map((item) => item.acv), // Extract ACV values
        backgroundColor: [
          '#ff9999', // Example colors, customize as needed
          '#66b3ff',
          '#99ff99',
          '#ffcc99',
          '#c2c2f0',
        ],
        borderColor: ['#fff'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      {data.length > 0 ? ( // Render chart only if data is available
        <Doughnut style={{maxWidth:"100%",maxHeight:"400px"}} data={chartData} />
      ) : (
        <p>Loading data...</p> // Display loading indicator while fetching
      )}
    </div>
  );
};

export default DoughnutChart;
