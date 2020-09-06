import React, { Component } from "react";
import PriceCard from "../price-card/price-card";
import { Tab, Tabs } from "../tab/tab";
import mockdata from "../../mockdata/data.json";
import CONSTANTS from "../utilities/constants";
import "./price-page.scss";

/**
 * The page will show main content of the website which includes different price ranges and Plans based on chosen categories.
 */
export default class PricePage extends Component {
  /**
   * Constructor.
   */
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  /**
   * Set the data here, for this case we have static data.
   */
  componentDidMount() {
    this.setState({ data: mockdata });
  }

  // Get tabs header text array
  getTabHeaders = () => {
    const tabHeaderSet = new Set();
    for (const item of this.state.data) {
      tabHeaderSet.add(item.averageHomePricePoint);
    }
    return Array.from(tabHeaderSet);
  };

  /**
   * filter tab data of header from data collection
   * @param {string} header - text of header
   */
  getTabData = (header) => {
    return this.state.data.filter(
      (homePrice) => homePrice.averageHomePricePoint === header
    );
  };

  render() {
    const headers = this.getTabHeaders();
    return (
      <Tabs>
        {headers.map((header, index) => (
          <Tab
            key={index}
            name={header}
            selected={index === CONSTANTS.SELECTED_INDEX}
            className={
              index === 0 || index === headers.length - 1
                ? "rounded-border"
                : ""
            }
          >
            {this.getTabData(header)
              .filter(
                ({ planDetails: { planName } }) =>
                  planName !== CONSTANTS.FILTER_PLAN_NAME
              )
              .map((data, index) => (
                <PriceCard key={index} data={data.planDetails} />
              ))}
            {
              <PriceCard /* Enterprise Card which is an outlier. */
                data={{
                  planName: "Enterprise",
                }}
                className="price-card"
              />
            }
          </Tab>
        ))}
      </Tabs>
    );
  }
}
