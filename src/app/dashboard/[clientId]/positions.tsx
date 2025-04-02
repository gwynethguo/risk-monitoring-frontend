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
import { convertToLocalTime } from "./utils";

const Positions = ({ marketData }) => {
  console.log(marketData);
  return (
    <Card className="p-5">
      <CardTitle className="font-bold text-3xl">Positions</CardTitle>
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            <TableHead>Symbol</TableHead>
            <TableHead>Exchange</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Last Update</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {marketData.map((data) => (
            <TableRow key={data.id}>
              <TableCell>{data.symbol}</TableCell>
              <TableCell>{data.exchange}</TableCell>
              <TableCell>{data.quantity}</TableCell>
              <TableCell>{data.price}</TableCell>
              <TableCell>
                {convertToLocalTime(new Date().toISOString())}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default Positions;
