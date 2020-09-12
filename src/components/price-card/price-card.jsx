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
import "./price-card.scss";

// Set default values.
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
  // add all the props in one object.
  const props = {
    ...defaultProps,
    ...incomingProps,
  };

  // set a state object.
  const [showModal, setModalState] = useState(false);

  // Set popular card style to cards.
  const getPopularCardStyle = (isPopular) => {
    let style = { ...popularPriceCard };
    if (!isPopular) {
      style = { ...style, visibility: "hidden" };
    }
    return style;
  };

  // destructure object to use directly.
  const {
    style,
    data: { planName },
  } = props;

  const backgroundColor =
    props.data.popular || planName === CONSTANTS.ENTERPRISE
      ? "rgb(242, 242, 242"
      : "fff";
  return (
    <>
      <div style={style} className="col-xs-12 col-md-3">
        <PriceCardModal
          planName={planName}
          show={showModal}
          onHide={() => setModalState(false)}
        />
        <div
          className="most-popular-div"
          style={getPopularCardStyle(props.data.popular)}
        >
          Most Popular!
        </div>
        <div style={head} data-testid="plan-name">
          {planName}
        </div>
        <div className="body-container" style={{ backgroundColor }}>
          <div
            style={{
              marginTop: "30px",
              marginBottom: "-7px",
              display: planName === CONSTANTS.ENTERPRISE ? "block" : "none",
              height: "7em",
            }}
          >
            <p
              className="enterprise-box text-center"
              style={{ backgroundColor }}
            >
              Want more than 80 qualified leads each month?
            </p>
          </div>
          <div
            className="container"
            style={{
              visibility:
                planName === CONSTANTS.ENTERPRISE ? "hidden" : "visible",
              backgroundColor,
            }}
          >
            <center>
              <div
                style={{ ...largeFont, marginTop: "30px" }}
                data-testid="price-per-live-transfer"
              >
                {props.data.pricePerLiveTransfer}
              </div>
              <div style={smallFont}>Per Qualified lead</div>
              <div style={separator} />
              <div style={smallFont}> Qualified Leads Per Month</div>
              <div style={mediumFont} data-testid="qualified-leads-per-month">
                {props.data.qualifiedLeadsPerMonth}
              </div>
              <div style={separator} />
              <div style={smallFont}>Platform Fee Per Month</div>
              <div
                style={{ ...mediumFont, marginBottom: "15px" }}
                data-testid="total-platform-price"
              >
                {props.data.totalPlatformPrice}
              </div>

              <div
                style={{
                  ...bottom,
                  ...mediumFont,
                  fontWeight: 600,
                  marginLeft: "-15px",
                  marginRight: "-15px",
                }}
                data-testid="final-package-price"
              >
                {props.data.finalPackagePrice}/mo
              </div>
            </center>
          </div>
          <CustomButton
            solid={props.data.popular ? true : false}
            click={() => setModalState(true)}
          >
            {planName === CONSTANTS.ENTERPRISE
              ? "Get In Touch"
              : "Start Your Trial"}
          </CustomButton>
        </div>
      </div>
    </>
  );
};

export default PriceCard;
