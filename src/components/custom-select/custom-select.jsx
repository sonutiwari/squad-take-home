import React from "react";
import { FormGroup, Form, FormControl } from "react-bootstrap";
export default function CustomSelect(props) {
  const { title, as, id, options, ...otherProps } = props;
  return (
    <FormGroup as={as}>
      <Form.Label htmlFor={id}>
        {title}
        {props.required ? "*" : ""}
      </Form.Label>
      <FormControl as="select" {...otherProps}>
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </FormControl>
    </FormGroup>
  );
}
