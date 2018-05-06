import React from "react";

import "./Button.css";
/* TODO: add props validation */

const Button = ({
  color = "primary",
  shape = "",
  children,
  ...props
}: {
  color: string,
  children: any,
  props: {}
}) => (
  <button className={`button ${color} ${shape}`} {...props}>
    {children}
  </button>
);

export default Button;
