import React from "react";
import Margin from "./margin";
import Positions from "./positions";

const Dashboard = async () => {
  try {
    const [marginResponse, marketDataResponse] = await Promise.all([
      fetch("http://127.0.0.1:8000/api/margin-status/5", {
        method: "GET",
      }),
      fetch("http://127.0.0.1:8000/api/market-data/client/5", {
        method: "GET",
      }),
    ]);
    const marginData = await marginResponse.json();
    const marketData = await marketDataResponse.json();

    if (!marginResponse.ok || !marketDataResponse.ok) {
      throw new Error("Failed to fetch data");
    }

    const dashboardData = {
      marginStatus: marginData,
      marketData: marketData,
    };

    console.log(dashboardData);
    console.log(marketData);

    return (
      <div className="p-8">
        <div className="text-4xl font-bold py-1">Hi Shiro,</div>
        <div className="text-gray-400 font-bold">
          This is your risk summary.
        </div>
        <div className="py-8">
          <Margin marginStatus={dashboardData?.marginStatus}></Margin>
        </div>
        <Positions marketData={dashboardData?.marketData}></Positions>
      </div>
    );
  } catch (error) {
    console.error(error);
    return <div>Error loading data.</div>;
  }
};

export default Dashboard;
