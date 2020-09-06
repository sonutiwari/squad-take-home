import React from "react";
import { Form } from "react-bootstrap";

/**
 * A react component for Custom Checkbox with label.
 * @param {React.props} props : Properties of a component.
 * @returns {React.Component} A Component with checkbox and label.
 */
export default function CheckBox(props) {
  return <Form.Check inline {...props} type="checkbox" />;
}
