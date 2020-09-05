import React, { useEffect, useState } from "react";
import Modal from "../modal/modal";
import "./form.css";
import CustomButton from "../custom-button/button";

const PriceCardModal = (props) => {
  const [showModal, setModalState] = useState(false);

  useEffect(() => {
    setModalState(props.show);
  }, [props.show]);

  const onCloseHandler = () => {
    setModalState(false);
    props.onClose.call();
  };

  return (
    <Modal
      show={showModal}
      title={"Get Started with SquadVoice"}
      onClose={onCloseHandler}
    >
      <div style={{ marginBottom: "1.5rem", fontSize: "1.1rem" }}>
        <b>Plan Selected: </b>
        {props.planName}
      </div>

      <div className="inputWrapper">
        <label htmlFor="name">Name</label>
        <input id="name" />
      </div>

      <div className="inputWrapper">
        <div style={{ display: "flex" }}>
          <label htmlFor="email" style={{ flex: "1", marginRight: "1rem" }}>
            E-mail Address
          </label>
          <label htmlFor="phoneno" style={{ flex: "1" }}>
            Phone No.
          </label>
        </div>
        <div style={{ display: "flex" }}>
          <input style={{ flex: "1", marginRight: "1rem" }} id="email" />
          <input style={{ flex: "1" }} id="phoneno" />
        </div>
      </div>

      <div className="inputWrapper">
        <div style={{ display: "flex" }}>
          <label
            htmlFor="leadsPerMonth"
            style={{ flex: "1", marginRight: "1rem" }}
          >
            Number of leads you generate in a month
          </label>
          <label htmlFor="totalLeads" style={{ flex: "1" }}>
            Total leads in your CRM
          </label>
        </div>
        <div style={{ display: "flex" }}>
          <input
            style={{ flex: "1", marginRight: "1rem" }}
            id="leadsPerMonth"
            type="number"
          />
          <input style={{ flex: "1" }} id="totalLeads" type="number" />
        </div>
      </div>

      <div className="inputWrapper">
        <div style={{ display: "flex" }}>
          <label
            htmlFor="leadsPerMonth"
            style={{ flex: "1", marginRight: "1rem" }}
          >
            Which CRM do you use?
          </label>
          <label htmlFor="totalLeads" style={{ flex: "1" }}>
            No. of Agents
          </label>
        </div>
        <div style={{ display: "flex" }}>
          <input
            style={{ flex: "1", marginRight: "1rem" }}
            id="leadsPerMonth"
            type="number"
          />
          <input style={{ flex: "1" }} id="totalLeads" type="number" />
        </div>
      </div>

      <div className="inputWrapper">
        <label htmlFor="totalLeads">What are your biggest lead sources?</label>
        <div
          style={{ display: "flex", flexWrap: "wrap", marginBottom: "0.5rem" }}
        >
          <input
            type="checkbox"
            id="zillow"
            style={{ marginRight: "0.5rem", marginBottom: "0.5rem" }}
          />
          <label htmlFor="zillow" style={{ marginRight: "1.5rem" }}>
            {" "}
            Zillow{" "}
          </label>
          <input
            type="checkbox"
            id="realtor"
            style={{ marginRight: "0.5rem", marginBottom: "0.5rem" }}
          />
          <label htmlFor="realtor" style={{ marginRight: "1.5rem" }}>
            {" "}
            Realtor{" "}
          </label>
          <input
            type="checkbox"
            id="ylopo"
            style={{ marginRight: "0.5rem", marginBottom: "0.5rem" }}
          />
          <label htmlFor="ylopo" style={{ marginRight: "1.5rem" }}>
            {" "}
            Ylopo{" "}
          </label>
          <input
            type="checkbox"
            id="others"
            style={{ marginRight: "0.5rem", marginBottom: "0.5rem" }}
          />
          <label htmlFor="others" style={{ marginRight: "1.5rem" }}>
            {" "}
            Others{" "}
          </label>
        </div>
      </div>

      <div className="inputWrapper">
        <label htmlFor="totalLeads">How did you hear about us</label>
        <div
          style={{ display: "flex", flexWrap: "wrap", marginBottom: "0.5rem" }}
        >
          <input
            type="checkbox"
            id="google"
            style={{ marginRight: "0.5rem", marginBottom: "0.5rem" }}
          />
          <label htmlFor="google" style={{ marginRight: "1.5rem" }}>
            {" "}
            Google{" "}
          </label>
          <input
            type="checkbox"
            id="facebook"
            style={{ marginRight: "0.5rem", marginBottom: "0.5rem" }}
          />
          <label htmlFor="facebook" style={{ marginRight: "1.5rem" }}>
            {" "}
            Facebook{" "}
          </label>
          <input
            type="checkbox"
            id="email"
            style={{ marginRight: "0.5rem", marginBottom: "0.5rem" }}
          />
          <label htmlFor="email" style={{ marginRight: "1.5rem" }}>
            {" "}
            Email{" "}
          </label>
          <input
            type="checkbox"
            id="friends"
            style={{ marginRight: "0.5rem", marginBottom: "0.5rem" }}
          />
          <label htmlFor="friends" style={{ marginRight: "1.5rem" }}>
            {" "}
            Friends{" "}
          </label>
          <input
            type="checkbox"
            id="realClosers"
            style={{ marginRight: "0.5rem", marginBottom: "0.5rem" }}
          />
          <label htmlFor="realClosers" style={{ marginRight: "1.5rem" }}>
            {" "}
            Real Closers{" "}
          </label>
        </div>
      </div>

      <CustomButton
        solid
        style={{ width: "inherit", padding: "0.5rem 1rem" }}
        click={() => setModalState(false)}
      >
        Submit
      </CustomButton>
    </Modal>
  );
};

export default PriceCardModal;
