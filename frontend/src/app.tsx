// frontend/src/App.tsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./redux/actions";
import DataCard from "./components/DataCard";
import BarChart from "./components/BarChart";
import DoughnutChart from "./components/DoughnutChart";

const App = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.data);

  useEffect(() => {
    dispatch(fetchData("customer-type"));
    dispatch(fetchData("account-industry"));
    dispatch(fetchData("team"));
    dispatch(fetchData("acv-range"));
  }, [dispatch]);

  return (
    <div>
      <DataCard title="Customer Type" data={data.customerType} />
      <DataCard title="Account Industry" data={data.accountIndustry} />
      <DataCard title="Team" data={data.team} />
      <DataCard title="Product Line" data={data.productLine} />
      <BarChart data={data.customerType} />
      <DoughnutChart data={data.accountIndustry} />
    </div>
  );
};

export default App;
