import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const addCurrency = (value) => {
  return (
    <>
      {value < 0 && "-"}${Math.abs(value)}
    </>
  );
};

const Margin = ({ marginStatus }) => {
  return (
    <Card>
      <CardTitle>
        <div className="text-3xl font-bold px-6">Margin Status</div>
      </CardTitle>
      <CardContent>
        <div className="flex flex-col gap-4">
          <Card className="w-fit">
            <CardContent
              className={`text-5xl font-bold ${
                marginStatus.margin_shortfall > 0
                  ? "text-red-600"
                  : "text-green-600"
              }`}
            >
              {addCurrency(marginStatus.margin_shortfall)}
            </CardContent>
            <CardFooter className="font-bold text-gray-500">
              Margin Shortfall
            </CardFooter>
          </Card>
          <div className="flex gap-4">
            <Card className="w-fit">
              <CardContent className={`text-4xl font-bold `}>
                {addCurrency(marginStatus.portfolio_market_value)}
              </CardContent>
              <CardFooter className="font-bold text-gray-500">
                Portfolio Market Value
              </CardFooter>
            </Card>
            <Card className="w-fit">
              <CardContent className={`text-4xl font-bold `}>
                {addCurrency(marginStatus.loan_amount)}
              </CardContent>
              <CardFooter className="font-bold text-gray-500">
                Loan Amount
              </CardFooter>
            </Card>
            <Card className="w-fit">
              <CardContent className={`text-4xl font-bold `}>
                {addCurrency(marginStatus.net_equity)}
              </CardContent>
              <CardFooter className="font-bold text-gray-500">
                Net Equity
              </CardFooter>
            </Card>
            <Card className="w-fit">
              <CardContent className={`text-4xl font-bold `}>
                {addCurrency(marginStatus.total_margin_requirement)}
              </CardContent>
              <CardFooter className="font-bold text-gray-500">
                Total Margin Requirement
              </CardFooter>
            </Card>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Margin;
