import React, { Component } from "react";
import { Row, Col, Form, FormGroup, FormLabel } from "react-bootstrap";
import CustomInput from "../custom-input/custom-input";
import CustomSelect from "../custom-select/custom-select";
import CheckBox from "../checkboxes/checkboxes";
import { getObjectDataAsString } from "../utilities/utility-methods";

// Default state of Price form.
const defaultState = {
  email: "",
  name: "",
  phoneno: "",
  noOfLeads: 0,
  totalLeads: 0,
  crm: "",
  noOfAgents: 0,
};

export default class UserForm extends Component {
  // Object initialization for lead sources checkbox.
  leadSources = {
    zillow: false,
    realtor: false,
    ylopo: false,
    others: false,
  };

  // Object initialization for how they know us checkboxes.
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

  /**
   * The method will handle input chnages by user.
   * @param {event} event
   */
  handleInputChnage = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  };

  /**
   * Overrides default submit behaviour to our needs.
   * @param {event} event
   */
  handleFormSubmit = (event) => {
    event.preventDefault();
    let result = "";
    for (const [key, value] of Object.entries(this.state)) {
      result += `${key}: ${value}\n`;
    }
    result += "Lead Sources: " + getObjectDataAsString(this.leadSources) + "\n";
    result +=
      "How they know about us: " + getObjectDataAsString(this.howTheyKnowUs);
    alert(result);
    this.setState({
      ...defaultState,
    });
    this.props.onHide();
  };

  render() {
    return (
      <Form onSubmit={this.handleFormSubmit}>
        <Row>
          <h5>Plan Selected: </h5>
          <p className="ml-1">{this.props.planName}</p>
        </Row>
        <CustomInput
          title="Name"
          type="text"
          onChange={this.handleInputChnage}
          required
          name="name"
          id="name"
          value={this.state.name}
        />
        <Form.Row>
          <CustomInput
            title="E-mail Address"
            type="email"
            value={this.state.email}
            name="email"
            id="email"
            onChange={this.handleInputChnage}
            pattern="(.+)@(.+){2,}\.(.+){2,}"
            required
            as={Col}
          />
          <CustomInput
            type="tel"
            title="Phone No."
            value={this.state.phoneno}
            name="phoneno"
            id="phone"
            onChange={this.handleInputChnage}
            pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
            required
            as={Col}
          />
        </Form.Row>
        <Form.Row>
          <CustomSelect
            value={this.state.noOfLeads}
            name="noOfLeads"
            id="noOfLeads"
            onChange={this.handleInputChnage}
            options={["-", 10, 20, 30, 40, 50]}
            as={Col}
            title="Number of leads you generate in a month"
          />
          <CustomSelect
            id="totalLeads"
            name="totalLeads"
            value={this.state.totalLeads}
            onChange={this.handleInputChnage}
            title="Total leads in your CRM"
            options={["-", "0-10", "10-20", "20-30", "30-40"]}
            as={Col}
          />
        </Form.Row>

        <Form.Row>
          <CustomSelect
            title="Which CRM Do you use?"
            as={Col}
            id="crm"
            name="crm"
            value={this.state.crm}
            onChange={this.handleInputChnage}
            options={["-", "Squad", "Insigthly", "Salesforce"]}
          />
          <CustomSelect
            title="No. of Agents"
            as={Col}
            id="noOfAgents"
            name="noOfAgents"
            value={this.state.noOfAgents}
            onChange={this.handleInputChnage}
            options={["-", 1, 2, 3, 4, 5]}
          />
        </Form.Row>

        <Form.Row>
          <FormLabel>What are your biggest lead sources?</FormLabel>
        </Form.Row>
        <Form.Row>
          <FormGroup>
            {[
              { zillow: "Zillow" },
              { realtor: "Realtor" },
              { ylopo: "Ylopo" },
              { others: "Others" },
            ].map((source, index) => {
              const [key] = Object.keys(source);
              return (
                <CheckBox
                  key={index}
                  id={key}
                  label={source[key]}
                  onChange={() => this.handleLeadSourceChange(key)}
                />
              );
            })}
          </FormGroup>
        </Form.Row>

        <Form.Row>
          <FormLabel>How did you hear about us</FormLabel>
        </Form.Row>

        <Form.Row>
          {[
            { google: "Google" },
            { facebook: "Facebook" },
            { email: "Email" },
            { friends: "Friends" },
            { realClosers: "Real Closers" },
          ].map((source, index) => {
            const [key] = Object.keys(source);
            return (
              <CheckBox
                key={index}
                id={key}
                label={source[key]}
                onChange={() => this.handleHowTheyKnowUsCB(key)}
              />
            );
          })}
        </Form.Row>
        <Form.Row>
          <Form.Control
            type="submit"
            className="btn mt-5"
            style={{
              width: "fit-content",
              margin: "auto",
              backgroundColor: "#ef5a35",
              color: "#fff",
            }}
          />
        </Form.Row>
      </Form>
    );
  }
}
