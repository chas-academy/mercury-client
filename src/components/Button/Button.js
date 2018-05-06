// @flow
import React from "react";
import "./Button.css";

const Button = ({
  color = "primary",
  shape = "box",
  children,
  ...props
}: {
  color: string,
  shape: string,
  children: Object | string,
  props: {}
}) => (
  <button className={`button ${color} ${shape}`} {...props}>
    {children}
  </button>
);

export default Button;
