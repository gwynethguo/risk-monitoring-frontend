import { Card, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";

const convertToLocalTime = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleString();
};

const Positions = ({ marketData }) => {
  console.log(marketData);
  return (
    <Card className="p-5">
      <CardTitle className="font-bold text-3xl">Latest Market Data</CardTitle>
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            <TableHead>Symbol</TableHead>
            <TableHead>Exchange</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Latest Timestamp</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {marketData.map((data) => (
            <TableRow key={data.id}>
              <TableCell>{data.symbol}</TableCell>
              <TableCell>{data.exchange}</TableCell>
              <TableCell>{data.price}</TableCell>
              <TableCell>{convertToLocalTime(data.timestamp)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default Positions;
