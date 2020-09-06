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
        {props.required ? <span class="text-danger">*</span> : ""}
      </FormLabel>
      <FormControl {...attrs} placeholder={toTitleCase(attrs.name)} />
    </FormGroup>
  );
}

/**
 * converts a string into title case.
 * @param {string} phrase : Senetent you want to convert into title case(Space separated).
 * @returns {string} Space separated title case sentence'
 */
const toTitleCase = (phrase) => {
  return phrase
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
