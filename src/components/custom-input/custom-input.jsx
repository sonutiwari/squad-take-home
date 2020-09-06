import React from "react";
import { FormGroup, FormLabel, FormControl } from "react-bootstrap";
/**
 * A react component for Custom Input with label.
 * @param {React.props} props : Properties of a component.
 * @returns {React.Component} A Component with input and label.
 */
export default function CustomInput(props) {
  const { as, title, ...attrs } = props;
  return (
    <FormGroup as={as}>
      <FormLabel htmlFor={props.id}>
        {props.title}
        {props.required ? "*" : ""}
      </FormLabel>
      <FormControl {...attrs} />
    </FormGroup>
  );
}
