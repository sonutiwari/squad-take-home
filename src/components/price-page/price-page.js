import React, { useEffect, useState } from "react";
import PriceCard from "../price-card/price-card";
import { Tab, Tabs } from "../tab/tab";
import { priceCard as priceCardStyle } from "./price-page.style";
import mockdata from "../../mockdata/data.json";
import CONSTANTS from "../utilities/constants";

const PricePage = () => {
  const [data, setData] = useState([]);

  // Fetching Data from outside API
  useEffect(() => {
    if (data.length === 0) {
      setData(data.concat(mockdata));
    }
  }, [data]);

  // Get tabs header text array
  const getTabHeaders = () => {
    const tabHeaderSet = new Set();
    for (const item of data) {
      tabHeaderSet.add(item.averageHomePricePoint);
    }
    return Array.from(tabHeaderSet);
  };

  /**
   * filter tab data of header from data collection
   * @param {string} header - text of header
   */
  const getTabData = (header) => {
    return data.filter(
      (homePrice) => homePrice.averageHomePricePoint === header
    );
  };

  return (
    <Tabs>
      {getTabHeaders().map((header, index) => (
        <Tab key={index} name={header} selected={index === 2}>
          {getTabData(header)
            .filter(
              ({ planDetails: { planName } }) =>
                planName !== CONSTANTS.FILTER_PLAN_NAME
            )
            .map((data, index) => (
              <PriceCard
                style={priceCardStyle}
                key={index}
                data={data.planDetails}
              />
            ))}
          {
            <PriceCard
              style={priceCardStyle}
              data={{
                planName: "Enterprise",
              }}
            />
          }
        </Tab>
      ))}
    </Tabs>
  );
};

export default PricePage;
