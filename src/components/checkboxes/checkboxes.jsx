import React from "react";
import { Form } from "react-bootstrap";

export default function CheckBox(props) {
  return <Form.Check inline {...props} type="checkbox" />;
}
