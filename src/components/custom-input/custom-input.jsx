import React from "react";
import { FormGroup, FormLabel, FormControl } from "react-bootstrap";

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
