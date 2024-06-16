// frontend/src/App.tsx
import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./redux/actions";
import DataCard from "./components/DataCard";
import BarChart from "./components/BarChart";
import DoughnutChart from "./components/DoughnutChart";

const App = () => {
  // const dispatch = useDispatch();
  // const data = useSelector((state) => state.data);

  const data = {
    quarters: ['2023-Q3', '2023-Q4', '2024-Q1', '2024-Q2'],
    rows: [
      {
        quarter: '',
        custType: 'Existing Customer',
        data: [
          { opps: 46, acv: '$1,322,310', percentage: '57%' },
          { opps: 45, acv: '$1,124,857', percentage: '74%' },
          { opps: 49, acv: '$1,360,047', percentage: '81%' },
          { opps: 23, acv: '$647,821', percentage: '74%' }
        ],
        totalACV: '$4,455,036'
      },
      {
        quarter: '',
        custType: 'New Customer',
        data: [
          { opps: 14, acv: '$983,031', percentage: '43%' },
          { opps: 10, acv: '$387,300', percentage: '26%' },
          { opps: 6, acv: '$313,189', percentage: '19%' },
          { opps: 6, acv: '$224,643', percentage: '26%' }
        ],
        totalACV: '$1,908,164'
      },
      {
        quarter: '',
        custType: 'Total',
        data: [
          { opps: 60, acv: '$2,305,341', percentage: '100%' },
          { opps: 55, acv: '$1,512,157', percentage: '100%' },
          { opps: 55, acv: '$1,673,236', percentage: '100%' },
          { opps: 29, acv: '$872,465', percentage: '100%' }
        ],
        totalACV: '$6,363,200'
      }
    ]
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
        }}
      >
        <div style={{ flex: 1 }}>
          <BarChart />
        </div>
        <div style={{ flex: 1 }}>
          <DoughnutChart />
        </div>
      </div>
      <DataCard data={data}/>
    </div>
  );
};

export default App;
