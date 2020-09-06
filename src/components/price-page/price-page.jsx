import React, { Component } from "react";
import PriceCard from "../price-card/price-card";
import { Tab, Tabs } from "../tab/tab";
import CONSTANTS from "../utilities/constants";
import "./price-page.scss";
const DATA_URI =
  "https://raw.githubusercontent.com/sonutiwari/squad-take-home/master/src/mockdata/data.json";
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
    fetch(DATA_URI)
      .then((data) => data.json())
      .then((data) => {
        this.setState({ data });
      })
      .catch((err) => {
        console.error(err.message);
      });
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
    const headers = this.getTabHeaders(); // Get all the headers.
    return (
      <Tabs>
        {headers.map((
          header,
          index // Map headers to tabs.
        ) => (
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
            {this.getTabData(header) // filter data of each header.
              .filter(
                ({ planDetails: { planName } }) =>
                  planName !== CONSTANTS.FILTER_PLAN_NAME
              )
              .map((data, index) => (
                <PriceCard key={index} data={data.planDetails} /> // Psedo render tabs(not visible on UI yet unless tab is active.)
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
