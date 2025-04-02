"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Margin from "./margin";
import Positions from "./positions";

const Dashboard = () => {
  const params = useParams();
  const clientId = params.clientId;
  const [dashboardData, setDashboardData] = useState(null);
  const [error, setError] = useState(null);

  // Fetch initial data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [marginResponse, marketDataResponse] = await Promise.all([
          fetch(`http://127.0.0.1:8000/api/margin-status/${clientId}`),
          fetch(`http://127.0.0.1:8000/api/market-data/client/${clientId}`),
        ]);

        if (!marginResponse.ok || !marketDataResponse.ok) {
          throw new Error("Failed to fetch data");
        }

        const marginData = await marginResponse.json();
        const marketData = await marketDataResponse.json();

        setDashboardData({
          marginStatus: marginData,
          marketData: marketData,
        });
      } catch (err) {
        setError(err.message);
        console.error(err);
      }
    };

    fetchData();
  }, [clientId]);

  // WebSocket connection
  useEffect(() => {
    const ws = new WebSocket(`ws://127.0.0.1:8000/ws/${clientId}`);

    ws.onopen = () => console.log("Connected to WebSocket");

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log("WebSocket update:", data);
      setDashboardData((prev) => {
        if (!prev) return prev;

        var updatedMarketData;
        if (data.event === "price") {
          updatedMarketData = prev.marketData.map((item) => {
            if (
              item.symbol === data.symbol &&
              item.exchange === data.exchange
            ) {
              return {
                ...item,
                price: data.price ?? item.price,
                timestamp: new Date().toISOString(),
              };
            } else return item;
          });
          return {
            ...prev,
            marketData: updatedMarketData,
          };
        }

        if (data.event === "position") {
          updatedMarketData = [...prev.marketData, data];
          return {
            ...prev,
            marketData: updatedMarketData,
          };
        }

        if (data.event === "margin") {
          data.timestamp = new Date().toISOString();
          return {
            ...prev,
            marginStatus: data,
          };
        }
      });
    };

    ws.onerror = (error) => console.error("WebSocket error:", error);
    ws.onclose = () => console.log("WebSocket disconnected");

    return () => {
      ws.close();
    };
  }, []);

  if (error) {
    return <div>Error loading data: {error}</div>;
  }

  if (!dashboardData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-8">
      <div className="text-4xl font-bold py-1">Welcome back!</div>
      <div className="text-gray-400 font-bold">This is your risk summary.</div>
      <div className="py-8">
        <Margin marginStatus={dashboardData?.marginStatus} />
      </div>
      <Positions marketData={dashboardData?.marketData} />
    </div>
  );
};

export default Dashboard;
