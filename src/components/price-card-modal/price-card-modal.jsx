import React, { Component } from "react";
import { Modal, Container, Row, Col } from "react-bootstrap";

const defaultState = {
  email: "",
  name: "",
  phoneno: "",
  noOfLeads: 0,
  totalLeads: 0,
  crm: "Squad",
  noOfAgents: 0,
};

class PriceCardModel extends Component {
  leadSources = {
    zillow: false,
    realtor: false,
    ylopo: false,
    others: false,
  };

  howTheyKnowUs = {
    google: false,
    facebook: false,
    email: false,
    friends: false,
    realClosers: false,
  };

  constructor(props) {
    super(props);
    this.state = defaultState;
  }

  handleLeadSourceChange = (key) => {
    this.leadSources[key] = !this.leadSources[key];
  };

  handleHowTheyKnowUsCB = (key) => {
    this.howTheyKnowUs[key] = !this.howTheyKnowUs[key];
  };

  handleInputChnage = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    let result = "";
    for (const [key, value] of Object.entries(this.state)) {
      result += `${key}: ${value}\n`;
    }
    result +=
      "Lead Sources: " + this.getObjectDataAsString(this.leadSources) + "\n";
    result +=
      "How they know about us: " +
      this.getObjectDataAsString(this.howTheyKnowUs);
    alert(result);
    this.setState({
      ...defaultState,
    });
    this.props.onHide();
  };

  getObjectDataAsString(object) {
    let result = "";
    for (const key in object) {
      if (object[key]) {
        result += `${key} `;
      }
    }
    return result;
  }
  render() {
    const props = this.props;
    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="contained-modal-title-vcenter"
            style={{ margin: "auto" }}
          >
            Get started with SquadVoice
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <form onSubmit={this.handleFormSubmit}>
              <Row>
                <h5>Plan Selected:</h5>
                <p>{this.props.planName}</p>
              </Row>
              <Row>
                <label htmlFor="name" style={{ marginLeft: "3.5%" }}>
                  Name{" "}
                </label>
              </Row>

              <Row>
                <input
                  type="text"
                  style={{
                    width: "100%",
                    marginLeft: "3.5%",
                    marginRight: "3.5%",
                  }}
                  value={this.state.name}
                  name="name"
                  id="name"
                  onChange={this.handleInputChnage}
                  required
                />
              </Row>
              <br />
              <Row>
                <Col xs={12} md={6}>
                  <label htmlFor="email">E-mail Address</label>
                </Col>
                <Col xs={12} md={6}>
                  <label htmlFor="phone">Phone No.</label>
                </Col>
              </Row>

              <Row>
                <Col xs={12} md={6}>
                  <input
                    type="email"
                    style={{ width: "100%" }}
                    value={this.state.email}
                    name="email"
                    id="email"
                    onChange={this.handleInputChnage}
                    pattern="(.+)@(.+){2,}\.(.+){2,}"
                    required
                  />
                </Col>
                <Col xs={12} md={6}>
                  <input
                    type="tel"
                    id="phone"
                    name="phoneno"
                    style={{ width: "100%" }}
                    value={this.state.phoneno}
                    pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                    onChange={this.handleInputChnage}
                    required
                  />
                </Col>
              </Row>
              <br />
              <Row>
                <Col xs={12} md={6}>
                  <label htmlFor="noOfLeads">
                    Number of leads you generate in a month
                  </label>
                </Col>
                <Col xs={12} md={6}>
                  <label htmlFor="totalLeads">Total leads in your CRM</label>
                </Col>
              </Row>

              <Row>
                <Col xs={12} md={6}>
                  <input
                    type="number"
                    min={0}
                    style={{ width: "100%" }}
                    value={this.state.noOfLeads}
                    name="noOfLeads"
                    id="noOfLeads"
                    onChange={this.handleInputChnage}
                    required
                  />
                </Col>
                <Col xs={12} md={6}>
                  <input
                    type="number"
                    id="totalLeads"
                    name="totalLeads"
                    style={{ width: "100%" }}
                    value={this.state.totalLeads}
                    min={0}
                    onChange={this.handleInputChnage}
                    required
                  />
                </Col>
              </Row>
              <br />
              <Row>
                <Col xs={12} md={6}>
                  <label htmlFor="crm">Which CRM Do you use?</label>
                </Col>
                <Col xs={12} md={6}>
                  <label htmlFor="noOfAgents">No. of Agents</label>
                </Col>
              </Row>

              <Row>
                <Col xs={12} md={6}>
                  <select
                    name="crm"
                    value={this.state.crm}
                    onChange={this.handleInputChnage}
                  >
                    <option>Squad</option>
                    <option>Insigthly</option>
                    <option>Salesforce</option>
                  </select>
                </Col>
                <Col xs={12} md={6}>
                  <input
                    type="number"
                    id="noOfAgents"
                    name="noOfAgents"
                    style={{ width: "100%" }}
                    value={this.state.noOfAgents}
                    min={0}
                    onChange={this.handleInputChnage}
                    required
                  />
                </Col>
              </Row>
              <br />
              <Row style={{ marginLeft: "1%", marginRight: "1%" }}>
                <label htmlFor="totalLeads">
                  What are your biggest lead sources?
                </label>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    marginBottom: "0.5rem",
                  }}
                >
                  <input
                    type="checkbox"
                    id="zillow"
                    onChange={() => this.handleLeadSourceChange("zillow")}
                    style={{ marginRight: "0.5rem", marginBottom: "0.5rem" }}
                  />
                  <label htmlFor="zillow" style={{ marginRight: "1.5rem" }}>
                    {" "}
                    Zillow{" "}
                  </label>
                  <input
                    type="checkbox"
                    id="realtor"
                    onChange={() => this.handleLeadSourceChange("realtor")}
                    style={{ marginRight: "0.5rem", marginBottom: "0.5rem" }}
                  />
                  <label htmlFor="realtor" style={{ marginRight: "1.5rem" }}>
                    {" "}
                    Realtor{" "}
                  </label>
                  <input
                    type="checkbox"
                    id="ylopo"
                    onChange={() => this.handleLeadSourceChange("ylopo")}
                    style={{ marginRight: "0.5rem", marginBottom: "0.5rem" }}
                  />
                  <label htmlFor="ylopo" style={{ marginRight: "1.5rem" }}>
                    {" "}
                    Ylopo{" "}
                  </label>
                  <input
                    type="checkbox"
                    id="others"
                    onChange={() => this.handleLeadSourceChange("others")}
                    style={{ marginRight: "0.5rem", marginBottom: "0.5rem" }}
                  />
                  <label htmlFor="others" style={{ marginRight: "1.5rem" }}>
                    {" "}
                    Others{" "}
                  </label>
                </div>
              </Row>
              <br />
              <Row style={{ marginLeft: "1%", marginRight: "1%" }}>
                <label htmlFor="totalLeads">How did you hear about us</label>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    marginBottom: "0.5rem",
                  }}
                >
                  <input
                    type="checkbox"
                    id="google"
                    onChange={() => this.handleHowTheyKnowUsCB("google")}
                    style={{ marginRight: "0.5rem", marginBottom: "0.5rem" }}
                  />
                  <label htmlFor="google" style={{ marginRight: "1.5rem" }}>
                    {" "}
                    Google{" "}
                  </label>
                  <input
                    type="checkbox"
                    id="facebook"
                    onChange={() => this.handleHowTheyKnowUsCB("facebook")}
                    style={{ marginRight: "0.5rem", marginBottom: "0.5rem" }}
                  />
                  <label htmlFor="facebook" style={{ marginRight: "1.5rem" }}>
                    {" "}
                    Facebook{" "}
                  </label>
                  <input
                    type="checkbox"
                    id="email"
                    onChange={() => this.handleHowTheyKnowUsCB("email")}
                    style={{ marginRight: "0.5rem", marginBottom: "0.5rem" }}
                  />
                  <label htmlFor="email" style={{ marginRight: "1.5rem" }}>
                    {" "}
                    Email{" "}
                  </label>
                  <input
                    type="checkbox"
                    id="friends"
                    onChange={() => this.handleHowTheyKnowUsCB("friends")}
                    style={{ marginRight: "0.5rem", marginBottom: "0.5rem" }}
                  />
                  <label htmlFor="friends" style={{ marginRight: "1.5rem" }}>
                    {" "}
                    Friends{" "}
                  </label>
                  <input
                    type="checkbox"
                    id="realClosers"
                    onChange={() => this.handleHowTheyKnowUsCB("realClosers")}
                    style={{ marginRight: "0.5rem", marginBottom: "0.5rem" }}
                  />
                  <label
                    htmlFor="realClosers"
                    style={{ marginRight: "1.5rem" }}
                  >
                    {" "}
                    Real Closers{" "}
                  </label>
                </div>
              </Row>
              <Row>
                <input
                  type="submit"
                  className="btn"
                  value="submit"
                  style={{ backgroundColor: "#ef5a35", color: "#fff" }}
                />
              </Row>
            </form>
          </Container>
        </Modal.Body>
      </Modal>
    );
  }
}

export default PriceCardModel;
