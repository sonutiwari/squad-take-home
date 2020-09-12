import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import PriceCard from "./price-card";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

const componentMockData = {
  planName: "Qualified 20",
  qualifiedLeadsPerMonth: 20,
  pricePerLiveTransfer: "$69",
  totalQualifiedLeadPrice: "$1380",
  totalPlatformPrice: "$299",
  finalPackagePrice: "$1679",
  popular: true,
};

function renderComponent() {
  act(() => {
    render(
      <PriceCard data={componentMockData} className="price-card" />,
      container
    );
  });
}
describe("Testing PriceCard Component", () => {
  it("renders component with initial data with popular true", () => {
    renderComponent();
    const popularDiv = document.querySelector(".most-popular-div");
    expect(popularDiv.textContent).toBe("Most Popular!");
  });

  it("renders component with data, popular false", () => {
    delete componentMockData.popular;
    renderComponent();
    const popularDivVisibility = document.querySelector(".most-popular-div")
      .style.visibility;
    expect(popularDivVisibility).toBe("hidden");
  });
});
