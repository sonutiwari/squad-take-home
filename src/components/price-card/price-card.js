import React, { useState } from "react";
import CustomButton from "../custom-button/button";
import PriceCardModal from "../price-card-modal/price-card-modal";
import {
  bottom,
  head,
  largeFont,
  mediumFont,
  popularPriceCard,
  separator,
  smallFont,
} from "./price-card.style";
import CONSTANTS from "../utilities/constants";

const defaultProps = {
  data: {
    planName: "",
    qualifiedLeadsPerMonth: 0,
    pricePerLiveTransfer: "",
    totalQualifiedLeadPrice: "",
    totalPlatformPrice: "",
    finalPackagePrice: "",
    popular: false,
  },
};

const PriceCard = (incomingProps) => {
  console.log(incomingProps);
  const props = {
    ...defaultProps,
    ...incomingProps,
  };

  const [showModal, setModalState] = useState(false);

  const getPopularCardStyle = (isPopular) => {
    let style = { ...popularPriceCard };
    if (!isPopular) {
      style = { ...style, visibility: "hidden" };
    }
    return style;
  };
  const {
    style,
    data: { planName },
  } = props;
  return (
    <div style={style}>
      <div style={getPopularCardStyle(props.data.popular)}>Most Popular!</div>
      <div style={head} data-testid="plan-name">
        {planName}
      </div>
      <center>
        <div style={{ ...largeFont }} data-testid="price-per-live-transfer">
          {props.data.pricePerLiveTransfer}
        </div>
        <div
          style={{
            ...smallFont,
            visibility:
              planName === CONSTANTS.ENTERPRISE ? "hidden" : "visible",
          }}
        >
          Per Qualified lead
        </div>

        <div
          style={{
            ...separator,
            visibility:
              planName === CONSTANTS.ENTERPRISE ? "hidden" : "visible",
          }}
        ></div>
        {planName === CONSTANTS ? (
          <div style={smallFont}>
            <br />
          </div>
        ) : (
          ""
        )}
        <div style={smallFont}>
          {planName === CONSTANTS.ENTERPRISE
            ? "Want more than 80 qualified leads each month?"
            : "Qualified Leads Per Month"}
        </div>
        <div
          style={{
            ...mediumFont,
            visibility:
              planName === CONSTANTS.ENTERPRISE ? "hidden" : "visible",
          }}
          data-testid="qualified-leads-per-month"
        >
          {props.data.qualifiedLeadsPerMonth}
        </div>
        {planName === CONSTANTS ? (
          <div style={smallFont}>
            <br />
          </div>
        ) : (
          ""
        )}
        <div
          style={{
            ...separator,
            visibility:
              planName === CONSTANTS.ENTERPRISE ? "hidden" : "visible",
          }}
        ></div>

        <div
          style={{
            ...smallFont,
            visibility:
              planName === CONSTANTS.ENTERPRISE ? "hidden" : "visible",
          }}
        >
          Platform Fee Per Month
        </div>
        <div
          style={{
            ...mediumFont,
            marginBottom: "1rem",
            visibility:
              planName === CONSTANTS.ENTERPRISE ? "hidden" : "visible",
          }}
          data-testid="total-platform-price"
        >
          {props.data.totalPlatformPrice}
        </div>

        <div
          style={{
            ...bottom,
            ...mediumFont,
            fontWeight: 600,
            visibility:
              planName === CONSTANTS.ENTERPRISE ? "hidden" : "visible",
          }}
          data-testid="final-package-price"
        >
          {props.data.finalPackagePrice}/mo
        </div>
        <CustomButton click={() => setModalState(!showModal)}>
          {" "}
          Start Your Trial{" "}
        </CustomButton>
      </center>
      <PriceCardModal
        planName={props.data.planName}
        show={showModal}
        onClose={() => setModalState(false)}
      />
    </div>
  );
};

export default PriceCard;
